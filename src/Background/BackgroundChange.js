import React from "react";
import { DefaultDropBox } from "../DropBox/defaultDropBox";
import VideoBackground from "./Backdorund";
import bg1 from "./bg1.mp4"

export function BeackgroundDropBox(){

    return(
        <div>
            <DefaultDropBox options={["Lava", "Meer"]} choice="Lava"/>
        </div>
    )
}

export function FullBackgroundChanger(){
    return(
        <div>
            <VideoBackground bg={bg1}/>

            <BeackgroundDropBox/>
        </div>
        )
}