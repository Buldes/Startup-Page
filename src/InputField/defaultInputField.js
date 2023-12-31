import React from "react";
import { bgColor4e } from "../Styles/backGroundColor";
import { defaultTextSytle } from "../Styles/TextStyles";

export function DefaultInputField(props){
    const {fontSize = 15, bgColor=bgColor4e, height=25, borderRadius=5, border="0px solid #000000"} = props

    
    return <input 
    ref={props.inputRef}
    onKeyDown={props.handleKeyDown}
    value={props.value} placeholder={props.placeholder} onChange={props.onChange}
                  style={{backgroundColor: bgColor, border:border, borderRadius:borderRadius, fontSize:fontSize,
                  position: "relative", width:props.width, height:height, top:props.top, left:props.left, 
                  ...Object.assign({}, defaultTextSytle, props.add)}}></input>
}

          