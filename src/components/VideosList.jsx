import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((videos) => {
    return (
      <VideoItem
        key={videos.id.videoId}
        onVideoSelect={onVideoSelect}
        video={videos}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
