// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
