import React from "react";
import { useQuery } from "react-query";

// Fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 5 * 60 * 1000,           // cache considered fresh for 5 minutes
      cacheTime: 10 * 60 * 1000,          // inactive data stays in cache for 10 minutes
      refetchOnWindowFocus: true,         // refetch data when tab/window regains focus
      keepPreviousData: true,             // keeps previous data while fetching new
    }
  );

  if (isLoading) return <p className="text-blue-500">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => refetch()}
      >
        Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} className="mb-2 border-b pb-2">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
