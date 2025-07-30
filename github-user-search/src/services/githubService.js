import axios from "axios";

// Function to search GitHub users by query
export const searchGitHubUsers = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error("GitHub user search failed:", error);
    return [];
  }
};
