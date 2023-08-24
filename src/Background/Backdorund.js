import React from "react";

function VideoBackground(props) {
  return (
    <div className="video-background">
      <video src={props.bg} autoPlay loop muted>
      </video>
    </div>
  );
}

export default VideoBackground;
