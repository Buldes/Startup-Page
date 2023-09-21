import React from "react";
import { bgColor3e, bgColor5e } from "../Styles/backGroundColor";
import { DefaultLable } from "../Lable/defaultLable";
import { centering } from "../Styles/Look";
import { DeletButton } from "../Buttons/deleteButton";
import { manualDeleteBookMark } from "../variables/dictionary";

export function BookMarkSettingsList(props){
    const {text=props.url, bg1=bgColor5e,  bg2=bgColor3e} = props

    // check if number is even or od
    var backGroundColor
    var backGroundColorLable
    if (props.index % 2 === 0) {
        backGroundColor = bg1
        backGroundColorLable = "#575757"
    }
    else{
        backGroundColor = bg2
        backGroundColorLable = "#373737"
    }

    return(
        <div key={props.index} style={{position:"relative", marginTop:5, marginLeft:15, width:"calc(100% - 30px)", height:40, backgroundColor:backGroundColor, borderRadius:10, display:"flex", alignItems: "center", direction:"ltr"}}>
            <img alt="" src={props.url + "/favicon.ico"} width={25} style={{position:"relative", marginLeft:15}}></img>
            <DefaultLable text={text}marginLeft="2%" bg={backGroundColorLable} width={500} add={centering}/>
            <a href={props.url} style={{textDecoration: "none"}}><DefaultLable text={props.url} marginLeft="1%" bg={backGroundColorLable} width={700} add={centering} marginRight={50}/></a>
            <DeletButton click={() => manualDeleteBookMark(props.index)} index={props.index} text={"Delete"} marginRight={15}/>
        </div>
    )
}