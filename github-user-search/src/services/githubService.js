// src/services/githubService.js

import axios from "axios";

/**
 * Search GitHub users with optional location and minimum repository filters.
 *
 * @param {Object} params - Search parameters.
 * @param {string} params.query - The main search query (e.g., username).
 * @param {string} [params.location] - Optional location filter.
 * @param {number} [params.minRepos] - Optional minimum number of public repositories.
 * @returns {Promise<Object>} - The response data from GitHub API.
 */
export const searchGitHubUsers = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }

    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    const url = `https://api.github.com/search/users?q=${searchQuery}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
