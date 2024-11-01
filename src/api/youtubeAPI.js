import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideos = async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      maxResults: 5,
      q: query,
      key: API_KEY,
      type: "video",
    },
  });
  return response.data.items;
};

// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
// });
