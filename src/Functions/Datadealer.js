import { setBGValue, bg, setMenu, menu, bgColor, setBGColor } from "../variables/str";

export function RefreshVariable(){
    // BGValue
    setBGValue(localStorage.getItem("bg"))
    if (bg === null) {
        setBGValue("lava_ball")
        localStorage.setItem("bg", "lava_ball")
        console.log("saving...")
    }
    console.log("[INFO] Chosen bg: " + bg)

    // menu
    setMenu(localStorage.getItem("menu"))
    if (menu === null) {
        setMenu("main")
        localStorage.setItem("menu", "main")
    }
    console.log("[INFO] Menu: " + menu)

    // menu
    setBGColor(localStorage.getItem("color"))
    if (bgColor === null) {
        localStorage.setItem("color", "#5e5e5e")
    }
    console.log("[INFO] Menu: " + menu)
}

export function RefreshStorage(){
    localStorage.setItem("bg", bg)
    localStorage.setItem("menu", menu)
    localStorage.setItem("color", bgColor)
}