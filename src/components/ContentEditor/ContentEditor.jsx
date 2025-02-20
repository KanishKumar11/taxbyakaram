"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"

// Dynamically import Jodit-React to avoid SSR issues
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
})

export default function ContentEditor({ onSubmit, onCancel }) {
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append("content", content)
    if (image) {
      formData.append("image", image)
    }
    onSubmit(formData)
  }

  const removeImage = () => {
    setImage(null)
    setImagePreview(null)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-lg font-medium">Content</label>
          <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Add Image
            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>

        {imagePreview && (
          <div className="relative">
            <Image
              src={imagePreview || "/placeholder.svg"}
              alt="Preview"
              width={600}
              height={400}
              className="w-full rounded-lg object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              ×
            </button>
          </div>
        )}

        <div className="min-h-[200px] border rounded-lg">
          <JoditEditor
            value={content}
            onChange={(newContent) => setContent(newContent)}
            config={{
              buttons: ["bold", "italic", "underline", "ul", "ol", "link"],
              height: 300,
            }}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onCancel} className="flex-1 py-2 px-4 border rounded-md hover:bg-gray-50">
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Publish
        </button>
      </div>
    </div>
  )
}

