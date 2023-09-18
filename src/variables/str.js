import { RefreshStorage } from "../Functions/Datadealer";
import { bgColor5e } from "../Styles/backGroundColor";

export var bg = "lava_ball";

export const setBGValue = (value) =>{
    bg = value
}

export var menu = "main";

export const setMenu = (value) =>{
    menu = value
}

export function openMenu(value){
    setMenu(value)
    RefreshStorage()
    window.location.reload();
}

export var bgColor = bgColor5e;

export const setBGColor = (value) =>{
    bgColor = value
}