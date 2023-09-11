import React from "react";
import { IconButton } from "../Buttons/IconButton";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { bgColor1f, bgColor4e } from "../Styles/backGroundColor";
import { Headline } from "../Lable/HeadLines";
import { centeringX } from "../Styles/TextStyles";
import { centering } from "../Styles/Look";
import { defaultHeight } from "../variables/int";

export function LaptopSettings(){

    return (
        <div style={{width:"100%", height:"500px", backgroundColor:bgColor1f}}>
            <IconButton icon={faRightToBracket} top={5} left={5} click={() => window.location.href = "/"}/>

            <div style={centering}>
                <Headline text="Background" width={"100%"} top={30} borderRadius={20} height={defaultHeight + 5}/>
            </div>
        </div>
    )
}