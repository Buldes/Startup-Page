import React from "react"
import { centering } from "../Styles/Look"
import { SearchBar } from "./Search"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { IconButton } from "../Buttons/IconButton"
import VideoBackground from "../Background/Backdorund"
import bg1 from "../Background/bg1.mp4"
import bg2 from "../Background/bg2.mp4"
import bg3 from "../Background/bg3.mp4"
import bg4 from "../Background/bg4.mp4"
import { bg, bgColor, openMenu } from "../variables/str"
import { BokMarkComp } from "./bookMarkComp"

export function Laptop(){

    const backgrondVideos = {lava_ball:bg1, water:bg2, lines:bg3, ceiling_flames:bg4}
    const choosen = backgrondVideos[bg]

    if (bg === "solid_color") document.body.style.backgroundColor = bgColor
    else document.body.style.backgroundColor = "#000000"
    return(
        <div>
            <IconButton icon={faGear} top={5} left={5} click={() => openMenu("settings")}/>
            <VideoBackground bg={choosen}/>

            
            <div style={{display:"flex", flexDirection:"column", ...centering}}>
                <SearchBar iColor="#4285F4" top={50} width={500} placeholder="Google suche..."/>
                <SearchBar icon={faYoutube} iColor="#ff1111" top={60} width={500} placeholder="Youtube suche..." seacrhLink="https://www.youtube.com/results?search_query="/>
                
                <BokMarkComp/>
            </div>
        </div>
    )
}