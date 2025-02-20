"use client"

import { useState } from "react"
import Image from "next/image"

export default function UploadFormTop() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: null,
  })
  const [thumbnailPreview, setThumbnailPreview] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (!formData.thumbnail) {
      newErrors.thumbnail = "Thumbnail image is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", formData)
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, thumbnail: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setThumbnailPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Thumbnail Upload */}
      <div>
        <div
          className="relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => document.getElementById("thumbnail-upload")?.click()}
        >
          {thumbnailPreview ? (
            <div className="relative w-16 h-16 mx-auto">
              <Image
                src={thumbnailPreview || "/placeholder.svg"}
                alt="Thumbnail preview"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ) : (
            <div className="w-16 h-16 mx-auto bg-green-400 rounded-lg flex items-center justify-center mb-2">
              <span className="text-white text-2xl">*</span>
            </div>
          )}
          <div>
            <p className="font-medium">Upload Thumbnail Image</p>
            <p className="text-sm text-gray-500">img 1</p>
          </div>
          <input id="thumbnail-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </div>
        {errors.thumbnail && <p className="text-red-500 text-sm mt-1">{errors.thumbnail}</p>}
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="The poster : The Link in bio tool"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="The poster : The Link in bio tool"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors"
      >
        Submit
      </button>
    </form>
  )
}
