import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles";
import { bgColor4e } from "../Styles/backGroundColor";

export function DefaultLable(props){

    const styleTypL = Object.assign({}, defaultTextSytle, props.add)
    const {fontSize = 20, bg=bgColor4e, height=25, borderRadius=5, marginLeft=0, marginRight=0} = props

    return <label id={props.id} style={{
        width:props.width, height:height,
        top:props.top, left:props.left, position:"relative", 
        borderRadius:borderRadius, border:props.border, 
        fontSize:fontSize,
        backgroundColor:bg,
        textAlign:props.textAlign,
        marginLeft:marginLeft,
        marginRight:marginRight,
        opacity:props.opacity,
        display:"flex", ...styleTypL}} >{props.text}</label>
}