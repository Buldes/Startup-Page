import React, { useState } from 'react';
import InputSlider from 'react-input-slider';
import { bgColor5e } from '../Styles/backGroundColor';

export function DefaultSlider(props) {
  const {width="calc(100% - 10px)", thumbSize=20, bgColorTrack="#5555ff", bgColor=bgColor5e, top=0, left=5, trackHeight=15,
          max=0, min=100, step=0.1} = props

  return (
    <div style={{position:'relative', width:width,top:top, left:left}}>
      <InputSlider axis='x' x={props.value} onChange={props.onChange} xmax={max} xmin={min} xstep={step} xreverse
        styles={{thumb:{height:thumbSize, width:thumbSize},
                 track:{backgroundColor:bgColorTrack, width:width, height:trackHeight},
                 active:{backgroundColor:bgColor}}}/>
    </div>
  );
}