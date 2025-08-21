import React from "react";
import PostsComponent from "./components/PostsComponent";

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}

export default App;
