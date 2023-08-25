import React from "react"
import { centering } from "../Styles/Look"
import { SearchBar } from "./Search"
import { faGithub, faGoogle, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { LinkButton } from "./LinkButtons"
import { faPlayCircle, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FullBackgroundChanger } from "../Background/BackgroundChange"


export function Laptop(){

    return(
        <div>
            <FullBackgroundChanger/>
            <div style={{display:"flex", flexDirection:"column", ...centering}}>
                <SearchBar iColor="#4285F4" top={50} width={500} placeholder="Google suche..."/>
                <SearchBar icon={faYoutube} iColor="#ff1111" top={60} width={500} placeholder="Youtube suche..." seacrhLink="https://www.youtube.com/results?search_query="/>

                <div style={{display:"flex", flexDirection:"row", top:100, position:"relative"}}>
                    <LinkButton icon={faPlayCircle} color="#ff0000" left={-10} text="YouTube Music" url="https://music.youtube.com/"/>
                    <LinkButton icon={faGithub} text="GitHub" url="https://github.com/"/>
                    <LinkButton icon={faYoutube} color="#ff0000" left={10} text="YouTube" url="https://www.youtube.com/"/>
                </div>
                <div style={{display:"flex", flexDirection:"row", top:110, position:"relative"}}>
                    <LinkButton icon={faGoogle} color="#4285F4" left={-10} text="Google" url="https://www.google.com"/>
                    <LinkButton icon={faPlus} color="#" text="not finished" url=""/>
                    <LinkButton icon={faPlus} color="#" left={10} text="not finished" url=""/>
                </div>
            </div>
        </div>
    )
}