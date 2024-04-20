import axios from "axios";

const API_KEY = "xZ0mk7BHM4G8ky6hP2mOX82YnBYmQgsUfw-LtNMNehg";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (currentPage, searchQuery) => {
  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 4,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
