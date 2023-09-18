import React from "react";

export function VideoComp(props){
    const {width=320, height=null, top=10, left=0} = props

    return(
        <div>
            <video src={props.file} autoPlay loop muted style={{position:"relative", width:width, height:height, top:top, left:left}}>
            </video>
        </div>
    )
}