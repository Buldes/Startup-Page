import React from "react";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { bg, setBGValue } from "../variables/str";
import bg1 from "../Background/bg1.mp4"
import bg2 from "../Background/bg2.mp4"
import bg3 from "../Background/bg3.mp4"
import bg4 from "../Background/bg4.mp4"
import gaming1 from "../Background/gaming1.jpg"
import gaming2 from "../Background/gaming2.jpg"
import gaming3 from "../Background/gaming3.jpg"
import gaming4 from "../Background/gaming4.jpg"
import gaming5 from "../Background/gaming5.jpg"
import { VideoComp } from "./video";
import { ColorPicker } from "./ColorChooser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo } from "@fortawesome/free-solid-svg-icons";

export function BGOptionButton(){

    return(
        <div style={{position:"relative", top:50, width:"100%", overflowX:"scroll"}}>
                    <RadioGroup onChange={(e) => setBGValue(e)} value={bg} horizontal>
                        <ReversedRadioButton value="water" style={{color:"red"}}>
                            <FontAwesomeIcon icon={faVideo} color={"red"}/> Water
                            <VideoComp file={bg2}/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="lava_ball">
                            <FontAwesomeIcon icon={faVideo} color={"red"}/> Lava Ball
                            <VideoComp file={bg1}/>
                        </ReversedRadioButton>
                        
                        <ReversedRadioButton value="lines">
                            <FontAwesomeIcon icon={faVideo} color={"red"}/> Lines
                            <VideoComp file={bg3}/>
                        </ReversedRadioButton>

                        
                        <ReversedRadioButton value="ceiling_flames">
                            <FontAwesomeIcon icon={faVideo} color={"red"}/> Ceiling Flames Motion
                            <VideoComp file={bg4}/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="gaming1">
                            <FontAwesomeIcon icon={faImage} color={"#7777ff"}/> Gaming #1
                            <img style={{height:190}} src={gaming1} alt="Something went wrong... :("/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="gaming2">
                            <FontAwesomeIcon icon={faImage} color={"#7777ff"}/> Gaming #2
                            <img style={{height:190}} src={gaming2} alt="Something went wrong... :("/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="gaming3">
                            <FontAwesomeIcon icon={faImage} color={"#7777ff"}/> Gaming #3
                            <img style={{height:190}} src={gaming3} alt="Something went wrong... :("/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="gaming4">
                            <FontAwesomeIcon icon={faImage} color={"#7777ff"}/> Gaming #4
                            <img style={{height:190}} src={gaming4} alt="Something went wrong... :("/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="gaming5">
                            <FontAwesomeIcon icon={faImage} color={"#7777ff"}/> Gaming #5
                            <img style={{height:190}} src={gaming5} alt="Something went wrong... :("/>
                        </ReversedRadioButton>
                        
                        <ReversedRadioButton value="solid_color">
                            Solid Color
                            <ColorPicker enableDot/>
                        </ReversedRadioButton>


                    </RadioGroup>
                </div>
    )
}