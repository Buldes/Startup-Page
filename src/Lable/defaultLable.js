import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles";
import { bgColor4e } from "../Styles/backGroundColor";

export function DefaultLable(props){

    const styleTypL = Object.assign({}, defaultTextSytle, props.add)
    const {fontSize = 20, bg=bgColor4e, height=25} = props

    return <label id={props.id} style={{
        width:props.width, height:height,
        top:props.top, left:props.left, position:"relative", 
        borderRadius:"5px", border:props.border, 
        fontSize:fontSize,
        backgroundColor:bg,
        textAlign:props.textAlign,
        display:"flex", ...styleTypL}} >{props.text}</label>
}