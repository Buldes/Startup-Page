import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles.js";
import { bgColor4e } from "../Styles/backGroundColor.js";

export function DefaultButton(props){
    const {fontSize = 20, bg=bgColor4e, height=25, fontColor="#ffffff", borderRadius=5} = props
    const styleTypB = Object.assign({},  defaultTextSytle, {color:fontColor}, props.add)

    return <button  id={props.id} onClick={props.click} style={{
                    backgroundColor:bg, borderColor: props.color, borderRadius:borderRadius,
                    width: props.width, height:height, 
                    top:props.top, left:props.left, position: "relative", 
                    fontSize:fontSize,
                    display: "flex",
                    marginLeft:props.marginLeft,
                    marginRight:props.marginRight,
                     ...styleTypB}}>{props.text}</button>
}