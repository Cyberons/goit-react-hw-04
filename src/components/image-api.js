import axios from "axios";

const accessKey = "xZ0mk7BHM4G8ky6hP2mOX82YnBYmQgsUfw-LtNMNehg";

axios.defaults.baseURL = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

export const fetchImages = async (currentPage, searchQuery) => {
  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return response.data.hits;
};