"use client";
import { useRouter } from "next/navigation";

export default function BlogCard({
  id,
  image,
  title,
  slug,
  description,
  isAdmin,
  onDelete,
}) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(`/blogs/${slug}`);
  };
  return (
    <div
      className="rounded-lg cursor-pointer bg-white overflow-hidden group border border-gray-300 shadow-lg min-h-full min-w-[280px] w-full relative"
      onClick={handleRedirect}
    >
      {image && (
        <div className="h-[200px] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm flex-grow">{description}</p>
        )}

        {isAdmin && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/blog/edit/${id}`);
              }}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
