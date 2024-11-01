import React, { useState } from "react";
import { fetchVideos } from "../api/youtubeAPI";

const VideoSection = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const videoResults = await fetchVideos(query);
    setVideos(videoResults);
    setQuery("");

    // getVideos();
  };

  //   const getVideos = async () => {
  //     const response = await youtube.get("search", {
  //       params: {
  //         part: "snippet",
  //         maxResults: 5,
  //         key: process.env.REACT_APP_YOUTUBE_API,
  //       },
  //     });

  //     console.log(response);
  //   };

  return (
    <div style={{ padding: "20px" }}>
      <h1>YouTube Clone</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for videos..."
          required
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {videos.map((video) => (
          <div key={video.id.videoId} style={{ marginBottom: "20px" }}>
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <p>{video.snippet.description}</p>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>

      <section>
        {videos.map((video) => (
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}} frameborder="0" height="auto" width="100%"></iframe>`}
          />
        ))}
      </section>
    </div>
  );
};

export default VideoSection;
