import React from "react";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { bg, setBGValue } from "../variables/str";
import bg1 from "../Background/bg1.mp4"
import bg2 from "../Background/bg2.mp4"
import bg3 from "../Background/bg3.mp4"
import bg4 from "../Background/bg4.mp4"
import { VideoComp } from "./video";
import { ColorPicker } from "./ColorChooser";

export function BGOptionButton(){

    return(
        <div style={{position:"relative", top:50, width:"100%", overflowX:"scroll"}}>
                    <RadioGroup onChange={(e) => setBGValue(e)} value={bg} horizontal>
                        <ReversedRadioButton value="water" style={{color:"red"}}>
                            Water
                            <VideoComp file={bg2}/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="lava_ball">
                            Lava Ball
                            <VideoComp file={bg1}/>
                        </ReversedRadioButton>
                        
                        <ReversedRadioButton value="lines">
                            Lines
                            <VideoComp file={bg3}/>
                        </ReversedRadioButton>

                        
                        <ReversedRadioButton value="ceiling_flames">
                            Ceiling Flames Motion
                            <VideoComp file={bg4}/>
                        </ReversedRadioButton>

                        
                        <ReversedRadioButton value="solid_color">
                            Solid Color
                            <ColorPicker enableDot/>
                        </ReversedRadioButton>


                    </RadioGroup>
                </div>
    )
}