"use client";
import BlogCard from "@/components/BlogCard";

export default function BlogCardPage() {
  // Demo data array with 4 cards
  const cardsData = [
    {
      id: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h2aZQA9wrCYanSY7CSv7o3MQjSbb2P.png",
      title: "Sculpt gen",
      description:
        "Sculpt in short is a college-specific chat-based Community platform that provides infrastructure & tools to colleges & building blocks to increase productivity, organize your stuff, build con",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400",
      title: "Design Systems",
      description:
        "Learn how to build scalable design systems and component libraries that can be shared across multiple projects and teams.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400",
      title: "Web Performance",
      description:
        "Explore techniques and best practices for optimizing web performance, including lazy loading, code splitting, and caching strategies.",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=400",
      title: "Accessibility",
      description:
        "Discover how to create inclusive web applications that work for everyone, following WCAG guidelines and implementing proper ARIA attributes.",
    },
  ];

  // Handler functions for edit and delete
  const handleEdit = (id) => {
    console.log(`Editing card with id: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Deleting card with id: ${id}`);
    // Add your delete logic here
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card) => (
          <BlogCard
            key={card.id}
            {...card}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
