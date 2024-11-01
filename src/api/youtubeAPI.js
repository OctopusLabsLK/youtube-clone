import axios from "axios";

export default axios.create({
  baseURL: "https://www.googlepapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: process.env.REACT_APP_YOUTUBE_API,
  },
});

const youtubeAPI = () => {
  return 1;
};
