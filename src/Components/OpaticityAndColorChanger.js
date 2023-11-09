import React, { useState } from "react";
import { SearchBar } from "./Search";
import { centering } from "../Styles/Look";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import screenShot from "../Background/bg1_screenShot.jpg"
import { HexAlphaColorPicker } from "react-colorful";
import { LinkButton } from "./LinkButtons";


export function OpaticityAndColor(){

    const [serachBarColor, setSearchBarColor] = useState("")

    const bgStyle = {
        backgroundImage: `url(${screenShot})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      };

      
    return(
        <div>
            <div>
                
            </div>

            <div style={{position:"relative", width:"calc(100% - 15px)", left:5, top:10, height:500, borderRadius:10, ...bgStyle}}>
                
                <div style={{display:"flex", flexDirection:"column", position:"relative", ...centering}}>
                    <SearchBar iColor="#4285F4" top={20} width={500} placeholder="Google suche..." backgroundColor={serachBarColor}/>
                    <SearchBar icon={faYoutube} iColor="#ff1111" top={30} width={500} placeholder="Youtube suche..." seacrhLink="https://www.youtube.com/results?search_query=" backgroundColor={serachBarColor}/>

                    <div style={{ display:"flex", flexDirection:"row", top:100, position:"relative", ...centering }}>
                        <LinkButton key={1} autoIcon text={"YouTube"} url={"https://www.youtube.com"} /> 
                        <LinkButton key={2} autoIcon text="GitHub" url="https://github.com/" /> 
                        <LinkButton key={3} autoIcon text="YouTube" url="https://www.youtube.com/" /> 
                    </div>
                    <div style={{ display:"flex", flexDirection:"row", top:100, position:"relative", ...centering }}>
                        <LinkButton key={4} autoIcon text="Google" url="https://www.google.com" /> 
                        <LinkButton key={5} autoIcon text={"Example.com"} url={"https://www.example.com"} /> 
                    </div>

                </div>
            </div>

            <HexAlphaColorPicker color={serachBarColor} onChange={setSearchBarColor}/>
        </div>
    )
}