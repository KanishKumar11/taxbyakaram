"use client"

import ContentEditor from "@/components/ContentEditor"

export default function Page() {
  const handleSubmit = async (formData) => {
    // Handle form submission
    console.log("Content:", formData.get("content"))
    console.log("Image:", formData.get("image"))
  }

  const handleCancel = () => {
    // Handle cancel action
    console.log("Cancelled")
  }

  return <ContentEditor onSubmit={handleSubmit} onCancel={handleCancel} />
}

