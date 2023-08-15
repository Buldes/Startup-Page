import React from "react";
import { bgColor4e } from "../Styles/backGroundColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { centering } from "../Styles/Look";
import { DefaultLable } from "../Lable/defaultLable";

export function LinkButton(props){
    const {bgColor=bgColor4e, color="white", size="2xl", width=120, height=120, text=props.url, borderRadius=10,
           textColor="#dddddd"} = props

    return(
        <a href={props.url} style={{display:"flex", flexDirection:"column", position:"relative", width:width, 
                                    height:height, backgroundColor:bgColor, top:props.top, 
                                    left:props.left, borderRadius:borderRadius,
                                    textDecoration: "none", ...centering}}>
            <FontAwesomeIcon icon={props.icon} size={size} style={{color:color}}/>
            <DefaultLable text={text} fontSize={12} add={{color:textColor}} top={5}/>
        </a>
      
    )
}