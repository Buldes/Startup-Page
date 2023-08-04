import React from "react";
import { IconButton } from "../Buttons/IconButton";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function GoogleSearchBar(props){


    return(
        <div style={{position: "relative", top:props.top, left:props.left}}>
            <IconButton icon={faXmark}/>
        </div>
    )
}