import React from "react";
import { IconButton } from "../Buttons/IconButton";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { bgColor1f } from "../Styles/backGroundColor";
import { Headline } from "../Lable/HeadLines";
import { centering } from "../Styles/Look";
import { defaultHeight } from "../variables/int";
import { openMenu } from "../variables/str";
import { BGOptionButton } from "./RadioButton";
import { BookMarkSettingsList } from "./BookMarksSetiingsComp";
import { bookMarks } from "../variables/dictionary";
import { AddBookMark } from "./adBookMarkComp";
import { OpaticityAndColor } from "./OpaticityAndColorChanger";

export function LaptopSettings(){

    return (
        <div style={{width:"100%", height:1500, backgroundColor:bgColor1f}}>
            <IconButton icon={faRightToBracket} top={5} left={5} click={() => openMenu("main")}/>

            <div>
                <div style={centering}>
                    <Headline text="Background" width={"100%"} top={30} borderRadius={20} height={defaultHeight + 5}/>
                </div>
                <BGOptionButton/>
            </div>

            <div style={{position:"relative", top:80}}>
                <div style={centering}>
                    <Headline text="Bookmarks" width={"100%"} top={30} borderRadius={20} height={defaultHeight + 5}/>
                </div>
                <div style={{position:"relative", top:40}}>
                    {bookMarks.map((element, index) => (
                        <BookMarkSettingsList url={element.url} text={element.name} index={index}key={index}/>
                    ))}
                    <AddBookMark/>
                </div>
            </div>

            <div style={{position:"relative", top:160}}>
                <div style={centering}>
                    <Headline text="Opacity" width={"100%"} top={30} borderRadius={20} height={defaultHeight + 5}/>
                </div>
                <div style={{position:"relative", top:40}}>
                    <OpaticityAndColor/>
                </div>
            </div>
        </div>
    )
}