class FontSizeTool {
  static get isInline() {
    return true;
  }

  constructor({ api }) {
    this.api = api;
    this.button = null;
    this.state = false;
    this.tag = "SPAN";
    this.class = "cdx-font-size";
    this._popover = null;
  }

  static get sanitize() {
    return {
      span: {
        class: true,
        style: true,
      },
    };
  }

  render() {
    this.button = document.createElement("button");
    this.button.type = "button";
    this.button.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 12h12M12 6v12M4 7l4-4 4 4M4 17l4 4 4-4" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    this.button.classList.add("ce-inline-tool");

    this.button.addEventListener("click", (event) => {
      this.showFontSizePopover(event);
    });

    // Add styles for the popover
    if (!document.getElementById("font-size-tool-styles")) {
      const style = document.createElement("style");
      style.id = "font-size-tool-styles";
      style.textContent = `
        .font-size-popover {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 6px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          z-index: 2000;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 150px;
        }

        .font-size-popover select {
          padding: 6px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          width: 100%;
          cursor: pointer;
        }

        .font-size-popover input {
          padding: 6px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          width: 100%;
          display: none;
        }

        .font-size-popover input.show {
          display: block;
        }

        .font-size-popover button {
          padding: 6px 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.2s;
        }

        .font-size-popover button:hover {
          background: #0056b3;
        }

        .cdx-font-size {
          background: transparent;
          padding: 0;
        }
      `;
      document.head.appendChild(style);
    }

    return this.button;
  }

  showFontSizePopover(event) {
    event.stopPropagation();

    if (this._popover) {
      this._popover.remove();
    }

    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const boundary = range.getBoundingClientRect();

    const popover = document.createElement("div");
    popover.className = "font-size-popover";
    this._popover = popover;

    // Create and populate select element
    const select = document.createElement("select");
    const sizes = [
      { label: "8 pt", value: "8px" },
      { label: "10 pt", value: "10px" },
      { label: "12 pt", value: "12px" },
      { label: "14 pt", value: "14px" },
      { label: "16 pt", value: "16px" },
      { label: "18 pt", value: "18px" },
      { label: "20 pt", value: "20px" },
      { label: "24 pt", value: "24px" },
      { label: "28 pt", value: "28px" },
      { label: "32 pt", value: "32px" },
      { label: "36 pt", value: "36px" },
      { label: "Custom...", value: "custom" },
    ];

    sizes.forEach(({ label, value }) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });

    // Create custom input
    const customInput = document.createElement("input");
    customInput.type = "text";
    customInput.placeholder = "Enter size (e.g., 16px)";

    // Create apply button
    const applyButton = document.createElement("button");
    applyButton.textContent = "Apply";

    // Position the popover
    const editorBounds = document
      .querySelector(".codex-editor")
      .getBoundingClientRect();
    const popoverTop = boundary.top - 45; // Position above text
    const popoverLeft = Math.min(
      boundary.left,
      editorBounds.right - popover.offsetWidth - 20
    );

    popover.style.position = "fixed";
    popover.style.top = `${popoverTop}px`;
    popover.style.left = `${popoverLeft}px`;

    // Add elements to popover
    popover.appendChild(select);
    popover.appendChild(customInput);
    popover.appendChild(applyButton);

    // Handle select change
    select.addEventListener("change", () => {
      if (select.value === "custom") {
        customInput.classList.add("show");
        customInput.focus();
      } else {
        customInput.classList.remove("show");
      }
    });

    // Handle apply button click
    applyButton.addEventListener("click", () => {
      const size = select.value === "custom" ? customInput.value : select.value;
      if (this.isValidFontSize(size)) {
        this.setFontSize(size);
        popover.remove();
      } else {
        alert("Please enter a valid font size (e.g., 16px)");
      }
    });

    // Handle custom input enter key
    customInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const size = customInput.value;
        if (this.isValidFontSize(size)) {
          this.setFontSize(size);
          popover.remove();
        } else {
          alert("Please enter a valid font size (e.g., 16px)");
        }
      }
    });

    // Close popover when clicking outside
    const closePopover = (e) => {
      if (!popover.contains(e.target) && e.target !== this.button) {
        popover.remove();
        document.removeEventListener("click", closePopover);
      }
    };

    // Delay adding the click listener to prevent immediate closure
    setTimeout(() => {
      document.addEventListener("click", closePopover);
    }, 0);

    document.body.appendChild(popover);
  }

  setFontSize(size) {
    const range = this.api.selection.getRanges()[0];
    if (!range) return;

    // Check if selection is within a header or other block
    const blockElement = this.api.selection.findParentTag([
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "P",
    ]);

    if (blockElement) {
      // If entire block is selected, apply to block
      if (this.isEntireBlockSelected(blockElement)) {
        blockElement.style.fontSize = size;
        return;
      }
    }

    // Otherwise, wrap selected text in span
    const selectedText = range.extractContents();
    const span = document.createElement(this.tag);
    span.classList.add(this.class);
    span.style.fontSize = size;
    span.appendChild(selectedText);
    range.insertNode(span);

    // Restore selection
    this.api.selection.expandToTag(span);
  }

  isEntireBlockSelected(blockElement) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    return (
      range.startContainer === blockElement.firstChild &&
      range.startOffset === 0 &&
      range.endContainer === blockElement.lastChild &&
      range.endOffset === blockElement.lastChild.length
    );
  }

  isValidFontSize(size) {
    return /^\d+(\.\d+)?(px|pt|em|rem|%)$/.test(size);
  }

  checkState(selection) {
    const text = selection.anchorNode;
    if (!text) return;

    const fontSize = this.getFontSize(text);
    this.state = !!fontSize;
  }

  getFontSize(node) {
    if (!node) return null;

    // Check for direct font-size style
    if (node.style && node.style.fontSize) {
      return node.style.fontSize;
    }

    // Check parent elements
    let parent = node.parentElement;
    while (parent) {
      if (parent.style && parent.style.fontSize) {
        return parent.style.fontSize;
      }
      parent = parent.parentElement;
    }

    return null;
  }
}

export default FontSizeTool;
