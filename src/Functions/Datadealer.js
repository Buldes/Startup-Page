import { bookMarks, setBookMarks } from "../variables/dictionary";
import { setBGValue, bg, setMenu, menu, bgColor, setBGColor } from "../variables/str";

export function RefreshVariable(){
    // BGValue
    setBGValue(localStorage.getItem("bg"))
    if (bg === null) {
        setBGValue("lava_ball")
        localStorage.setItem("bg", "lava_ball")
    }
    console.log("[INFO] Chosen bg: " + bg)

    // menu
    setMenu(localStorage.getItem("menu"))
    if (menu === null) {
        setMenu("main")
        localStorage.setItem("menu", "main")
    }
    console.log("[INFO] Menu: " + menu)

    // bg color
    setBGColor(localStorage.getItem("color"))
    if (bgColor === null) {
        localStorage.setItem("color", "#5e5e5e")
        setBGColor(localStorage.getItem("color"))
    }
    console.log("[INFO] bg color: " + bgColor)
    
    // bookMarks
    setBookMarks(JSON.parse(localStorage.getItem("bookMarks")))
    if (bookMarks === null) {
        setBookMarks([{ name: 'YouTube Music', url: 'https://music.youtube.com' },
                      { name: 'GitHub', url: 'https://github.com/' },
                      { name: 'YouTube', url: 'https://www.youtube.com' },
                      { name: 'Google', url: 'https://www.google.com' },
                      { name: 'ChatGPT', url: 'https://chat.openai.com' }])
        localStorage.setItem("bookMarks", JSON.stringify(bookMarks))
    }
    console.log("[INFO] book-marks: " + bookMarks)
}

export function RefreshStorage(){
    localStorage.setItem("bg", bg)
    localStorage.setItem("menu", menu)
    localStorage.setItem("color", bgColor)
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks))
}