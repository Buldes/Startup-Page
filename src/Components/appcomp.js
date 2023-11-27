import React from "react"
import { centering } from "../Styles/Look"
import { SearchBar } from "./Search"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { IconButton } from "../Buttons/IconButton"
import MainBackground from "../Background/Backdorund"
import bg1 from "../Background/bg1.mp4"
import bg2 from "../Background/bg2.mp4"
import bg3 from "../Background/bg3.mp4"
import bg4 from "../Background/bg4.mp4"
import gaming1 from "../Background/gaming1.jpg"
import gaming2 from "../Background/gaming2.jpg"
import gaming3 from "../Background/gaming3.jpg"
import gaming4 from "../Background/gaming4.jpg"
import gaming5 from "../Background/gaming5.jpg"
import { bg, bgColor, openMenu } from "../variables/str"
import { BokMarkComp } from "./bookMarkComp"
import { DefaultLable } from "../Lable/defaultLable"
import { LaptopSettings } from "./settingsComp"

export function Laptop(){

    const backgrondVideos = {lava_ball:bg1, water:bg2, lines:bg3, ceiling_flames:bg4, gaming1:gaming1, gaming2:gaming2, gaming3:gaming3, gaming4:gaming4, gaming5:gaming5}
    const choosen = backgrondVideos[bg]

    var divStyle = {}
    var isVideo = true
    if (bg.includes("gaming")) {
        isVideo = false
        divStyle = {
            height: '2500px',
            width:"100%",
            backgroundImage: `url(${choosen})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'} 
    }

    if (bg === "solid_color") document.body.style.backgroundColor = bgColor
    else document.body.style.backgroundColor = "#000000"
    return(
        <div style={divStyle}>
            <IconButton icon={faGear} top={5} left={5} click={() => openMenu("settings")}/>
            <DefaultLable text={"BG Designed by: FreePik"} bg="transperente" fontSize={10} top={-10} left={"calc(100% - 100px)"} width={100}/>
            <MainBackground bg={choosen} videoBackground={isVideo}/>

            
            <div style={{display:"flex", flexDirection:"column", ...centering}}>
                <SearchBar iColor="#4285F4" top={50} width={500} placeholder="Google suche..."/>
                <SearchBar icon={faYoutube} iColor="#ff1111" top={60} width={500} placeholder="Youtube suche..." seacrhLink="https://www.youtube.com/results?search_query="/>
                
                <BokMarkComp/>
            </div>
        </div>
    )
}