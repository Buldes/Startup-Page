import React from "react";
import { SearchBar } from "./Search";
import { centering } from "../Styles/Look";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { BokMarkComp } from "./bookMarkComp";


export function OpaticityAndColor(){

    return(
        <div>
            <div>
                
            </div>

            <div style={{position:"relative", width:"calc(100% - 15px)", left:5, top:10, height:500, backgroundColor:"red", borderRadius:10}}>
                
                <div style={{display:"flex", flexDirection:"column", position:"relative", ...centering}}>
                    <SearchBar iColor="#4285F4" top={20} width={500} placeholder="Google suche..."/>
                    <SearchBar icon={faYoutube} iColor="#ff1111" top={30} width={500} placeholder="Youtube suche..." seacrhLink="https://www.youtube.com/results?search_query="/>

                    <BokMarkComp/>

                </div>
            </div>
        </div>
    )
}