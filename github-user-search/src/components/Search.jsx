// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e, newPage = 1) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, newPage);
      if (newPage === 1) {
        setUsers(data.items);
      } else {
        setUsers(prev => [...prev, ...data.items]);
      }
      setHasMore(data.items.length > 0);
      setPage(newPage);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={(e) => handleSearch(e)} className="space-y-4">
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="GitHub Username" className="w-full p-2 border rounded" />
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location (optional)" className="w-full p-2 border rounded" />
        <input type="number" value={minRepos} onChange={e => setMinRepos(e.target.value)} placeholder="Minimum Repos (optional)" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center space-x-4 p-2 border rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <button
          onClick={(e) => handleSearch(e, page + 1)}
          className="mt-6 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
