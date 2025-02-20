"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import FontSizeTool from "./FontSizeTool";

const EditorJS = dynamic(() => import("@editorjs/editorjs"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const EDITOR_JS_TOOLS = {
  header: {
    class: undefined, // Dynamically imported below
    config: {
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2,
      inlineToolbar: ["link", "bold", "italic", "fontsize"],
    },
  },
  paragraph: {
    class: undefined, // Dynamically imported below
    inlineToolbar: ["link", "bold", "italic", "fontsize"],
    config: {
      preserveBlank: true,
    },
  },
  list: {
    class: undefined, // Dynamically imported below
    inlineToolbar: ["link", "bold", "italic", "fontsize"],
    config: {
      defaultStyle: "unordered",
    },
  },
  quote: {
    class: undefined, // Dynamically imported below
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+O",
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  code: {
    class: undefined, // Dynamically imported below
    inlineToolbar: true,
  },
  delimiter: {
    class: undefined, // Dynamically imported below
  },
  inlineCode: {
    class: undefined, // Dynamically imported below
  },
  image: {
    class: undefined, // Dynamically imported below
    config: {
      uploader: {
        uploadByFile: async (file) => {
          // Replace with your image upload logic
          return {
            success: 1,
            file: {
              url: URL.createObjectURL(file),
            },
          };
        },
      },
      captionPlaceholder: "Image caption",
    },
  },
  table: {
    class: undefined, // Dynamically imported below
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  warning: {
    class: undefined, // Dynamically imported below
    inlineToolbar: true,
    shortcut: "CMD+SHIFT+W",
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  marker: {
    class: undefined, // Dynamically imported below
  },
  checklist: {
    class: undefined, // Dynamically imported below
  },
  fontsize: FontSizeTool,
  alignment: {
    class: undefined, // Dynamically imported below
  },
};

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "Welcome to my blog post!",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "This is a sample paragraph. You can edit this content or add your own.",
      },
    },
  ],
};

export default function EditorJSEditor({
  initialData = DEFAULT_INITIAL_DATA,
  onReady,
  onChange,
  imageUploader,
}) {
  const editorInstanceRef = useRef(null);
  const holderRef = useRef(null);
  const [editorReady, setEditorReady] = useState(false);
  const [error, setError] = useState(null);

  const memoizedOnChange = useCallback(
    (data) => {
      onChange?.(data);
    },
    [onChange]
  );

  const memoizedOnReady = useCallback(() => {
    onReady?.();
  }, [onReady]);

  useEffect(() => {
    let isMounted = true;

    const initEditor = async () => {
      if (!holderRef.current || editorInstanceRef.current) return;

      try {
        // Import all tools
        const [
          EditorJS,
          Header,
          List,
          ImageTool,
          Quote,
          Code,
          InlineCode,
          Table,
          Warning,
          Delimiter,
          Marker,
          Checklist,
          Paragraph,
          AlignmentTuneTool,
        ] = await Promise.all([
          import("@editorjs/editorjs"),
          import("@editorjs/header"),
          import("@editorjs/list"),
          import("@editorjs/image"),
          import("@editorjs/quote"),
          import("@editorjs/code"),
          import("@editorjs/inline-code"),
          import("@editorjs/table"),
          import("@editorjs/warning"),
          import("@editorjs/delimiter"),
          import("@editorjs/marker"),
          import("@editorjs/checklist"),
          import("@editorjs/paragraph"),
          import("editorjs-text-alignment-blocktune"),
        ]);

        // Configure tools with imported classes
        const tools = {
          ...EDITOR_JS_TOOLS,
          header: {
            ...EDITOR_JS_TOOLS.header,
            class: Header.default,
            tunes: ["alignment"],
          },
          paragraph: {
            ...EDITOR_JS_TOOLS.paragraph,
            class: Paragraph.default,
            tunes: ["alignment"],
          },
          list: {
            ...EDITOR_JS_TOOLS.list,
            class: List.default,
            tunes: ["alignment"],
          },
          quote: {
            ...EDITOR_JS_TOOLS.quote,
            class: Quote.default,
          },
          code: {
            ...EDITOR_JS_TOOLS.code,
            class: Code.default,
          },
          delimiter: {
            ...EDITOR_JS_TOOLS.delimiter,
            class: Delimiter.default,
          },
          inlineCode: {
            ...EDITOR_JS_TOOLS.inlineCode,
            class: InlineCode.default,
          },
          image: {
            ...EDITOR_JS_TOOLS.image,
            class: ImageTool.default,
          },
          table: {
            ...EDITOR_JS_TOOLS.table,
            class: Table.default,
          },
          warning: {
            ...EDITOR_JS_TOOLS.warning,
            class: Warning.default,
          },
          marker: {
            ...EDITOR_JS_TOOLS.marker,
            class: Marker.default,
          },
          checklist: {
            ...EDITOR_JS_TOOLS.checklist,
            class: Checklist.default,
          },
          alignment: {
            class: AlignmentTuneTool.default,
          },
        };

        const editor = new EditorJS.default({
          holder: holderRef.current,
          tools,
          data: initialData,
          onChange: async () => {
            const data = await editor.save();
            memoizedOnChange(data);
          },
          onReady: () => {
            if (isMounted) {
              setEditorReady(true);
              memoizedOnReady();
            }
          },
          autofocus: true,
          placeholder: "Let's write an awesome blog post!",
        });

        editorInstanceRef.current = editor;
      } catch (err) {
        console.error("Error initializing editor:", err);
        if (isMounted) {
          setError(`Failed to load the editor: ${err.message}`);
        }
      }
    };

    initEditor();

    return () => {
      isMounted = false;
      // Clean up the editor instance
      if (
        editorInstanceRef.current &&
        typeof editorInstanceRef.current.destroy === "function"
      ) {
        editorInstanceRef.current.destroy();
      }
      editorInstanceRef.current = null;
    };
  }, [initialData, memoizedOnChange, memoizedOnReady]);

  if (error) {
    return (
      <div className="text-red-500">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-lg font-medium">Content</label>
        <div className="text-sm text-gray-500">Blog Editor</div>
      </div>
      <div
        ref={holderRef}
        className="border rounded-lg min-h-[400px] p-4 editor-container"
      >
        {!editorReady && (
          <div className="flex items-center justify-center h-full">
            Loading editor...
          </div>
        )}
      </div>

      <style jsx global>{`
        .editor-container .ce-block__content {
          max-width: 100%;
          margin: 0;
        }

        .editor-container h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 1.5rem 0;
        }

        .editor-container h2 {
          font-size: 2rem;
          font-weight: 600;
          margin: 1.25rem 0;
        }

        .editor-container h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin: 1rem 0;
        }

        .editor-container h4 {
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0.75rem 0;
        }

        .editor-container h5 {
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0.5rem 0;
        }

        .editor-container h6 {
          font-size: 1rem;
          font-weight: 500;
          margin: 0.25rem 0;
        }

        .editor-container p {
          font-size: 1rem;
          line-height: 1.6;
          margin: 0.75rem 0;
        }

        .editor-container .cdx-block {
          padding: 0.5rem 0;
        }

        .ce-toolbar__plus {
          left: -2rem;
        }

        .ce-toolbar__actions {
          right: -2rem;
        }

        .ce-inline-toolbar {
          transform: translateY(-6px) !important;
        }

        .ce-conversion-toolbar {
          transform: translateY(6px) !important;
        }
      `}</style>
    </div>
  );
}
