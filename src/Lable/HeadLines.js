import React from "react";
import { bgColor5e } from "../Styles/backGroundColor";
import { centering } from "../Styles/Look";
import { DefaultLable } from "./defaultLable";

export function Headline(props){
    const {color = bgColor5e, fontSize=20, borderRadius=20, height=25} = props
    return <DefaultLable fontSize={fontSize} text={props.text} top={props.top} left={props.left} bg={color} width={props.width} height={height} borderRadius={borderRadius} add={Object.assign({}, centering, props.add)}/>
}