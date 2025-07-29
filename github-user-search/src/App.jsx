import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { fetchGitHubUser } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      setError(null);
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch (err) {
      setUserData(null);
      setError('User not found or an error occurred.');
    }
  };

  return (
    <div className="app-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={userData.avatar_url}
            alt="avatar"
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Public Repos:</strong> {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
