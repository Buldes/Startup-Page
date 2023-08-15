import React, { useRef } from "react";
import { IconButton } from "../Buttons/IconButton";
import { DefaultInputField } from "../InputField/defaultInputField";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { bgColor4e } from "../Styles/backGroundColor";

export function SearchBar(props){
    const {width=400, height=35, bgColor=bgColor4e, borderRadius=5, icon=faGoogle, iColor="white",
           seacrhLink="https://www.google.com/search?q="} = props


    //search by "search link"
    const inputRef = useRef(null);
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        const searchTerm = inputRef.current.value;
        const searchUrl = seacrhLink + `${encodeURIComponent(searchTerm)}`;
        window.open(searchUrl, '_blank');
      }
    };

    return(
        <div style={{width:width, height:height, backgroundColor:bgColor, position: "relative", top:props.top, 
                     left:props.left, justifyContent:"flex-start", display:"flex", borderRadius:borderRadius}}>
                        
            <IconButton icon={icon} bgColor={bgColor4e} size="xl" width={30} color={iColor} top={4} left={4}/>
            <DefaultInputField inputRef={inputRef} handleKeyDown={handleKeyDown} height={height -2} width={width - 36} 
                              bgColor={bgColor} placeholder={props.placeholder} left={6}/>
        </div>
    )
}