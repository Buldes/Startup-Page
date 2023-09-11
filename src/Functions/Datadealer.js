import { setBGValue, bg } from "../variables/str";

export function RefreshVariable(){
    // BGValue
    setBGValue(localStorage.getItem("bg"))
    if (bg === null) {
        setBGValue("lava_ball")
        localStorage.setItem("bg", "lava_ball")
        console.log("saving...")
    }
    console.log("[INFO] Chosen bg: " + bg)
}

export function RefreshStorage(){
    localStorage.setItem("bg", bg)
}