import React from "react";
import { bgColor5e } from "../Styles/backGroundColor";
import { DefaultInputField } from "../InputField/defaultInputField";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { AddButton } from "../Buttons/addButton";
import { manualAddBookMark } from "../Functions/addBookMark";

export function AddBookMark(props){
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")


    return(
        <div key={props.index} style={{position:"relative", marginTop:15, marginLeft:15, width:"calc(100% - 30px)", height:40, backgroundColor:bgColor5e, borderRadius:10, display:"flex", alignItems: "center", direction:"ltr"}}>
            
            <div style={{marginLeft:5, display:"flex", alignItems: "center", direction:"ltr"}}>
                <div>
                    <FontAwesomeIcon icon={faImage} style={{marginLeft:15}}/>
                </div>

                <img alt="" src={url + "/favicon.ico"} width={25} style={{position:"relative", marginLeft:-20}} 
                onError={(e) => {
                    e.target.src = ""; 
                    }}></img>
            </div>

            <DefaultInputField border="1px solid black" width={398}  onChange={(e) => setName(e.target.value)} add={{marginLeft:"calc(2% - 1px)", textAlign:"center"}}/>
            <DefaultInputField border="1px solid black" width={700} onChange={(e) => setUrl(e.target.value)} add={{marginLeft:"calc(1% - 10px)", textAlign:"center"}}/>
        
            <AddButton text=" + Add" marginRight={15} marginLeft={40} click={(e) => manualAddBookMark({name:name, url:url})}/>
        </div>
    )
}