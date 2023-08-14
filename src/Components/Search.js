import React from "react";
import { IconButton } from "../Buttons/IconButton";
import { DefaultInputField } from "../InputField/defaultInputField";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { bgColor4e } from "../Styles/backGroundColor";

export function SearchBar(props){
    const {width=400, height=27, bgColor=bgColor4e, borderRadius=5, icon=faGoogle, iColor="white"} = props


    return(
        <div style={{width:width, height:height, backgroundColor:bgColor, position: "relative", top:props.top, 
                     left:props.left, justifyContent:"flex-start", display:"flex", borderRadius:borderRadius}}>
                        
            <IconButton icon={icon} bgColor={bgColor4e} size="lg" width={30} color={iColor}/>
            <DefaultInputField height={height -2} width={width - 30} bgColor={bgColor}/>
        </div>
    )
}