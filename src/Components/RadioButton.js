import React from "react";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { bg, setBGValue } from "../variables/str";
import bg1 from "../Background/bg1.mp4"
import bg2 from "../Background/bg2.mp4"
import { VideoComp } from "./video";
import { ColorPicker } from "./ColorChooser";

export function BGOptionButton(){

    return(
        <div style={{position:"relative", top:50}}>
                    <RadioGroup onChange={(e) => setBGValue(e)} value={bg} horizontal>
                        <ReversedRadioButton value="water">
                            Water
                            <VideoComp file={bg2}/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="lava_ball">
                            Lava Ball
                            <VideoComp file={bg1}/>
                        </ReversedRadioButton>

                        <ReversedRadioButton value="solid_color">
                            Solid Color
                            <ColorPicker enableDot/>
                        </ReversedRadioButton>

                    </RadioGroup>
                </div>
    )
}