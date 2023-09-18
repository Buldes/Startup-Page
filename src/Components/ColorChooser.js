import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { bgColor, setBGColor } from "../variables/str";

export function ColorPicker(props){
    const [value, setValue] = useState(bgColor)
    console.log(value)

    setBGColor(value)

    const {width=200, height=200, top=0, left=0, dotTop=0, dotLeft=205 ,BGwidth=200, BGheight=200, dotSize=20} = props

    if (props.enableBG){
        return(
            <div style={{position:"relative", width:BGwidth, height:BGheight, backgroundColor:value, top:top, left:left}}>
                <HexColorPicker color={value} onChange={(e) => setValue(e)} style={{position:"relative", width:width, height:height}}/>
            </div>
    )}
    else if (props.enableDot){
        return(
            <div style={{position:"relative", width:BGwidth, height:BGheight, top:top - dotSize, left:left}}>
                <div style={{position:"relative", borderRadius:"100%", width:dotSize, height:dotSize, top:dotTop + dotSize, left:dotLeft, backgroundColor:bgColor}}></div>
                <HexColorPicker color={value} onChange={(e) => setValue(e)} style={{position:"relative", width:width, height:height}}/>
            </div>
    )}
    else{
        return(
            <div style={{position:"relative", width:BGwidth, height:BGheight, top:top, left:left}}>
                <HexColorPicker color={value} onChange={(e) => setValue(e)} style={{position:"relative", width:width, height:height}}/>
            </div>
    )
    }
}