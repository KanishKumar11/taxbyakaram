"use client";

import { useEffect, useState } from "react";
import { Query } from "appwrite";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { account, databases } from "@/lib/appwrite";
import AdminNavbar from "@/components/AdminNavbar";
import { Menu } from "lucide-react";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

export default function AdminBlogList() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check admin status
        const user = await account.get();
        if (!user || !user.labels?.includes("admin")) {
          router.push("/admin-login");
          return;
        }
        setIsAdmin(true);

        // Fetch blogs
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [Query.orderDesc("createdAt")]
        );
        setBlogs(response.documents);
      } catch (error) {
        setError(error.message);
        if (error.code === 401) {
          router.push("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleDelete = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, blogId);
        setBlogs(blogs.filter((blog) => blog.$id !== blogId));
        setOpenDropdown(null);
      } catch (error) {
        alert("Failed to delete blog post: " + error.message);
      }
    }
  };

  const handleEdit = (blogId) => {
    router.push(`/edit/${blogId}`);
  };

  const toggleDropdown = (blogId) => {
    setOpenDropdown(openDropdown === blogId ? null : blogId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading blogs: {error}
      </div>
    );
  }

  return (
    <>
      <AdminNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
          <button
            onClick={() => router.push("/add-blog")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create New Post
          </button>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.$id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={blog.thumbnailUrl}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => toggleDropdown(blog.$id)}
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                  >
                    <Menu className="h-5 w-5 text-gray-600" />
                  </button>
                  {openDropdown === blog.$id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <button
                          onClick={() => handleEdit(blog.$id)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(blog.$id)}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{blog.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <a
                    href={`/blog/${blog.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Post →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No blog posts found. Create your first post!
          </div>
        )}
      </div>
    </>
  );
}
