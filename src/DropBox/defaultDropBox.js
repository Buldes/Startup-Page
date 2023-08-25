import React from "react";
import { defaultTextSytle } from "../Styles/TextStyles";
import { bgColor2e } from "../Styles/backGroundColor";

export function DefaultDropBox(props){
    const {fontSize=15, backgroundColor=bgColor2e, borderColor=backgroundColor, borderRadius="5px",height=30,
           width=100} = props
    var propsValue = props.options;
    let PropsOptions = []

    for (let i = 0; i < propsValue.length; i++){
        PropsOptions.push(<option key={propsValue[i]} value={propsValue[i]}>{propsValue[i]}</option>)
    }

    return <select onChange={props.onChange} id={props.id} style={{backgroundColor: backgroundColor, borderColor:borderColor, borderRadius:borderRadius,
                                                                   width:width, height:height, top:props.top, left:props.left, 
                                                                   position:"relative", fontSize:fontSize, ...Object.assign({}, defaultTextSytle, props.add)}}>
                {PropsOptions}
          </select>
}
