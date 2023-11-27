import React from "react";

function MainBackground(props) {

  if (props.videoBackground){
    return (
      <div className="video-background">
        <video src={props.bg} autoPlay loop muted>
        </video>
      </div>
    );}
}


export default MainBackground;
