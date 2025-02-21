"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Query } from "appwrite";
import AdminNavbar from "@/components/AdminNavbar";
import { slugify } from "@/lib/utils";
import { account, databases, storage } from "@/lib/appwrite";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;
const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

export default function CreateBlogPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    thumbnail: null,
  });
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [editorContent, setEditorContent] = useState("");
  const [isSlugAvailable, setIsSlugAvailable] = useState(true);
  const [isCheckingSlug, setIsCheckingSlug] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const checkAdminStatus = async () => {
      try {
        const user = await account.get();
        if (!user || !user.labels.includes("admin")) {
          if (isMounted) router.push("/admin-login");
        } else {
          if (isMounted) setIsAdmin(true);
        }
      } catch (error) {
        console.error("Auth error:", error);
        router.push("/admin-login");
      }
    };

    checkAdminStatus();
    return () => {
      isMounted = false;
    };
  }, [router]);

  const checkSlugAvailability = useCallback(
    debounce(async (slug) => {
      if (!slug) return;
      setIsCheckingSlug(true);
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [Query.equal("slug", slug)]
        );
        setIsSlugAvailable(response.documents.length === 0);
      } catch (error) {
        console.error("Error checking slug:", error);
      } finally {
        setIsCheckingSlug(false);
      }
    }, 500),
    [] // 500ms delay
  );

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    const newSlug = slugify(newTitle);
    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      slug: newSlug,
    }));
    checkSlugAvailability(newSlug);
  };

  const handleSlugChange = (e) => {
    const newSlug = slugify(e.target.value);
    setFormData((prev) => ({
      ...prev,
      slug: newSlug,
    }));
    checkSlugAvailability(newSlug);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.slug.trim()) newErrors.slug = "Slug is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.thumbnail) newErrors.thumbnail = "Thumbnail is required";
    if (!editorContent.trim()) newErrors.content = "Content is required";
    if (!isSlugAvailable) newErrors.slug = "This slug is already taken";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    try {
      let thumbnailId, thumbnailUrl;
      if (formData.thumbnail) {
        const thumbnailResponse = await storage.createFile(
          BUCKET_ID,
          "unique()",
          formData.thumbnail
        );
        thumbnailId = thumbnailResponse.$id;
        thumbnailUrl = storage.getFileView(BUCKET_ID, thumbnailId);
      }

      const blogData = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        content: editorContent, // Ensure content is saved
        thumbnailUrl,
        createdAt: new Date().toISOString(),
        status: "published",
        author: (await account.get()).$id,
      };

      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        "unique()",
        blogData
      );
      router.push("/adminhome");
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const editorConfig = {
    readonly: false,
    toolbar: true,
    spellcheck: true,
    minHeight: 500,
    // Define custom preset styling for the editor
    preset: "custom",
    styleWithCSS: false,
    // Configure enterMode to use proper paragraph tags
    enterMode: "1",
    // Set default paragraph separator
    defaultActionOnPaste: "insert_as_html",
    // Enable clean formatting on paste
    cleanOnPaste: true,
    // Define custom tag styles
    controls: {
      format: {
        tags: {
          p: "Paragraph",
          h1: "Heading 1",
          h2: "Heading 2",
          h3: "Heading 3",
        },
      },
    },
    // Add style list configuration
    style: {
      styleList: {
        "font-weight: bold": "Bold",
        "font-style: italic": "Italic",
        "text-decoration: underline": "Underline",
      },
    },
    // Configure content styling
    editorCssClass: "custom-editor",
    iframe: true,
    iframeStyle: `
      * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      body {
        padding: 10px;
        line-height: 1.6;
        font-size: 16px;
      }
      h1 {
        font-size: 32px;
        font-weight: bold;
        margin: 24px 0 16px;
      }
      h2 {
        font-size: 28px;
        font-weight: bold;
        margin: 20px 0 14px;
      }
      h3 {
        font-size: 24px;
        font-weight: bold;
        margin: 16px 0 12px;
      }
      p {
        margin: 16px 0;
      }
      ul, ol {
        margin: 16px 0;
        padding-left: 24px;
      }
      ul {
        list-style-type: disc;
      }
      ol {
        list-style-type: decimal;
      }
      li {
        margin: 8px 0;
      }
    `,
    enableDragAndDropFileToEditor: true,
    // Configure toolbar buttons
    buttons: [
      "source",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "h1",
      "h2",
      "h3",
      "|",
      "ul",
      "ol",
      "|",
      "outdent",
      "indent",
      "|",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "|",
      "image",
      "table",
      "link",
      "|",
      "align",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "copyformat",
    ],
    // Configure uploader
    uploader: {
      insertImageAsBase64URI: true,
      url: APPWRITE_ENDPOINT + "/storage/files",
      headers: { "X-Appwrite-Project": APPWRITE_PROJECT_ID },
      imagesExtensions: ["jpg", "jpeg", "png", "gif"],
      withCredentials: false,
      pathVariableName: "path",
      format: "json",
      method: "POST",
      prepareData: async function (formData) {
        const file = formData.get("files[0]");
        try {
          const response = await storage.createFile(
            BUCKET_ID,
            "unique()",
            file
          );
          const fileUrl = storage.getFileView(BUCKET_ID, response.$id);
          return { files: [fileUrl] };
        } catch (error) {
          console.error("Upload error:", error);
          throw error;
        }
      },
      isSuccess: function (resp) {
        return resp && resp.files && resp.files.length;
      },
      getMsg: function (resp) {
        return resp.message;
      },
      process: function (resp) {
        return {
          files: resp.files,
          error: resp.message,
          message: resp.message,
        };
      },
    },
  };

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <>
      <AdminNavbar />
      <div className="max-w-5xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-center mb-8">
            Create New Blog Post
          </h1>

          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Slug Input */}
          <div>
            <label htmlFor="slug" className="block text-sm font-medium mb-2">
              Slug
            </label>
            <div className="relative">
              <input
                id="slug"
                type="text"
                value={formData.slug}
                onChange={handleSlugChange}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                  isSlugAvailable ? "focus:ring-blue-500" : "focus:ring-red-500"
                }`}
                placeholder="post-url-slug"
              />
              {isCheckingSlug ? (
                <span className="absolute right-3 top-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                </span>
              ) : (
                <span
                  className={`absolute right-3 top-2 ${
                    isSlugAvailable ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {isSlugAvailable ? "✓" : "✗"}
                </span>
              )}
            </div>
            {errors.slug && (
              <p className="text-red-500 text-sm mt-1">{errors.slug}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Enter a brief description for your blog post"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Thumbnail Image
            </label>
            <div
              className="relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() =>
                document.getElementById("thumbnail-upload")?.click()
              }
            >
              {thumbnailPreview ? (
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setThumbnailPreview("");
                      setFormData({ ...formData, thumbnail: null });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
              )}
              <p className="text-sm text-gray-500">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              id="thumbnail-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  if (file.size > 10 * 1024 * 1024) {
                    alert("File size must be less than 10MB");
                    return;
                  }
                  setFormData({ ...formData, thumbnail: file });
                  const reader = new FileReader();
                  reader.onloadend = () => setThumbnailPreview(reader.result);
                  reader.readAsDataURL(file);
                }
              }}
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-sm mt-1">{errors.thumbnail}</p>
            )}
          </div>

          {/* Rich Text Editor */}
          <div>
            <label className="block text-sm font-medium mb-2">Content</label>
            <JoditEditor
              ref={editorRef}
              value={editorContent}
              onBlur={(newContent) => setEditorContent(newContent)}
              onChange={(newContent) => {}}
              config={editorConfig}
              tabIndex={1}
            />
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              disabled={loading}
              onClick={() => router.push("/adminhome")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
              disabled={loading || isCheckingSlug || !isSlugAvailable}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Publishing...
                </span>
              ) : (
                "Publish Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
