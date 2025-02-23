"use client";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import { account, databases } from "@/lib/appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check user role
        // const user = await account.get();
        // console.log(user);
        // setIsAdmin(user.labels?.includes("admin") || false);

        // Fetch blogs
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [Query.orderDesc("createdAt")]
        );
        setBlogs(response.documents);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, blogId);
        setBlogs(blogs.filter((blog) => blog.$id !== blogId));
      } catch (error) {
        alert("Failed to delete blog: " + error.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
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
      <Navbar />
      <div className="mx-[70px]">
        <div className="text-[44px] text-center mt-[60px] font-bold">
          All Blogs
        </div>
        <p className="text-xl text-center mb-16">
          Learn more about our Tax by reading our blogs.
        </p>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.$id}
              slug={blog.slug}
              id={blog.$id}
              image={blog.thumbnailUrl}
              title={blog.title}
              description={blog.description}
              isAdmin={isAdmin}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}
