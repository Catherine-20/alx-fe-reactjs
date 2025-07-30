import React, { useState } from "react";
import { searchGitHubUsers } from "../services/githubService";

const Search = ({ setResults, setLoading }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const data = await searchGitHubUsers({
        query,
        location,
        minRepos: minRepos ? parseInt(minRepos) : undefined,
      });
      setResults(data.items || []);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchUserData();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 md:flex-row md:items-end">
      <div className="flex flex-col">
        <label className="text-sm font-medium">Username / Keyword</label>
        <input
          type="text"
          className="border px-3 py-2 rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium">Location</label>
        <input
          type="text"
          className="border px-3 py-2 rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Nairobi"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium">Min Repos</label>
        <input
          type="number"
          className="border px-3 py-2 rounded-md"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="e.g. 10"
          min="0"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
