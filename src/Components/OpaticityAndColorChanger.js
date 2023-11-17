import React, { useEffect, useState } from "react";
import { SearchBar } from "./Search";
import { centering } from "../Styles/Look";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import screenShot from "../Background/bg1_screenShot.jpg"
import { HexAlphaColorPicker } from "react-colorful";
import { LinkButton } from "./LinkButtons";
import { bookMarkColor, searchBarColor, setBookMarkColor, setSearchBarColor } from "../variables/str";
import { DefaultLable } from "../Lable/defaultLable";
import { IconButton } from "../Buttons/IconButton";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { bgColor4e } from "../Styles/backGroundColor";


export function OpaticityAndColor(){

    const [serachBarColorRef, setSearchBarColorRef] = useState(searchBarColor)
    const [bookMarkColorRef, setBookMarkColorColorRef] = useState(bookMarkColor)

    const bgStyle = {
        backgroundImage: `url(${screenShot})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      };

    useEffect(() => {
        setSearchBarColor(serachBarColorRef)
        localStorage.setItem("searchBarColor", serachBarColorRef)
        setBookMarkColor(bookMarkColorRef)
        localStorage.setItem("bookMarkColor", bookMarkColorRef)
    })
      
    return(
        <div>
            <div>
                
            </div>

            <div style={{position:"relative", width:"calc(100% - 15px)", left:5, top:10, height:500, borderRadius:10, ...bgStyle}}>
                
                <div style={{display:"flex", flexDirection:"column", position:"relative", ...centering}}>
                    <SearchBar iColor="#4285F4" top={20} width={500} placeholder="Google suche..." bgColor={serachBarColorRef}/>
                    <SearchBar icon={faYoutube} iColor="#ff1111" top={30} width={500} placeholder="Youtube suche..." bgColor={serachBarColorRef} seacrhLink="https://www.youtube.com/results?search_query="/>

                    <div style={{ display:"flex", flexDirection:"row", top:100, position:"relative", ...centering }}>
                        <LinkButton key={1} autoIcon text={"YouTube"} url={"https://www.youtube.com"} bgColor={bookMarkColorRef}/> 
                        <LinkButton key={2} autoIcon text="GitHub" url="https://github.com/"  bgColor={bookMarkColorRef}/> 
                        <LinkButton key={3} autoIcon text="YouTube" url="https://www.youtube.com/"  bgColor={bookMarkColorRef}/> 
                    </div>
                    <div style={{ display:"flex", flexDirection:"row", top:100, position:"relative", ...centering }}>
                        <LinkButton key={4} autoIcon text="Google" url="https://www.google.com"  bgColor={bookMarkColorRef}/> 
                        <LinkButton key={5} autoIcon text={"Example.com"} url={"https://www.example.com"}  bgColor={bookMarkColorRef}/> 
                    </div>

                </div>
            </div>

            <div style={{position:"relative", marginLeft:50, marginTop:-495}}>
                <DefaultLable text="SearchBar" add={centering} width={200} top={25}/>
                <IconButton icon={faRefresh} bgColor={bgColor4e} size={"s"} height={25} click={() => setSearchBarColorRef("#4e4e4eff")}/>
                <HexAlphaColorPicker color={serachBarColorRef} onChange={setSearchBarColorRef}/>
            </div>

            <div style={{position:"relative", marginLeft:50, marginTop:-10}}>
                <DefaultLable text="BookMarks" add={centering} width={200} top={25}/>
                <IconButton icon={faRefresh} bgColor={bgColor4e} size={"s"} height={25} click={() => setBookMarkColorColorRef("#4e4e4eaa")}/>
                <HexAlphaColorPicker color={bookMarkColorRef} onChange={setBookMarkColorColorRef}/>
            </div>
        </div>
    )
}