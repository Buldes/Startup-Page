import React from "react";
import { bgColor4e } from "../Styles/backGroundColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { centering } from "../Styles/Look";

export function LinkButton(props){
    const {bgColor=bgColor4e, color="white", size="lg", width=100, height=100} = props

    return(
        <a href="https://www.example.com" style={{display:"flex", position:"relative", width:width, height:height, 
                                                    backgroundColor:bgColor, top:props.top, left:props.left, ...centering}}>
            <FontAwesomeIcon icon={props.icon} size={size} style={{color:color, ...centering}}/>
        </a>
      
    )
}