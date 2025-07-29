import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      onSearch(username);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '250px',
          marginRight: '10px',
        }}
      />
      <button
        type="submit"
        style={{ padding: '8px 16px', fontSize: '16px' }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
