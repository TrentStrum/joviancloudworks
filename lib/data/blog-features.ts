export const blogFeatures = [
  {
    title: "Feature 1",
    description: "Description 1",
    image: "/image1.jpg",
    category: "Category 1",
    className: "col-span-3",
    post: {
      id: "1",
      title: "Blog Post 1",
      content: "Content 1",
      slug: "blog-post-1",
      published: true,
      authorId: "1",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  {
    title: "Feature 2",
    description: "Description 2",
    image: "/image2.jpg",
    category: "Category 2",
    className: "col-span-3",
    post: {
      id: "2",
      title: "Blog Post 2",
      content: "Content 2",
      slug: "blog-post-2",
      published: true,
      authorId: "1",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  {
    title: "Cloud Security Best Practices",
    description: "Essential security measures for modern cloud infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    category: "Security",
    className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    post: {
      // Add required post data here
    }
  },
  {
    title: "AI in Cloud Computing",
    description: "How AI is transforming cloud services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    category: "Technology",
    className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800"
  },
  {
    title: "Cost Optimization Guide",
    description: "Strategies for reducing cloud infrastructure costs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Business",
    className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800"
  },
  {
    title: "Multi-Cloud Architecture",
    description: "Building resilient multi-cloud solutions",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    category: "Architecture",
    className: "col-span-1 lg:col-span-3 border-b lg:border-none"
  }
];