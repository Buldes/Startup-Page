import React from "react";
import { DefaultButton } from "./defaultButton";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DeletButton(props){
    var {text=null, withoutIcon=false, height=30, width=30, iconSize="xs", iconTop=3, iconLeft=0} = props

    if (!withoutIcon){
        width=null
        if (text != null) {
            iconTop -= 3
            iconLeft -= 3
        }
        return(
            <DefaultButton marginRight={props.marginRight} click={props.click} width={width} height={height} text={<div style={{display:"flex", alignItems: "center", direction:"ltr"}}><FontAwesomeIcon icon={faTrash} size={iconSize} color="red" style={{position:"relative", top:iconTop, left:iconLeft}}/>{text}</div>}/>
        )
    }
    else{
        return <DefaultButton click={props.click} width={width} height={height} text={<div>{text}</div>}/>
    }
}