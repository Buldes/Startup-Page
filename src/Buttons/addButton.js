import React from "react";
import { centering } from "../Styles/Look.js";
import { DefaultButton } from "./defaultButton.js";

export function AddButton(props){
    const {width=85, height=25, borderRadius=5, text=" + Add", fontSize="20px"} = props
    return <DefaultButton text={text} color="#2f9f1f" bg="#2f9f1f" click={props.click} borderRadius={borderRadius} width={width} height={height} top={props.top} left={props.left} fontSize={fontSize} add={centering} marginRight={props.marginRight} marginLeft={props.marginLeft}/>
} 
