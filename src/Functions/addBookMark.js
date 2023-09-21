import { addBookMarks } from "../variables/dictionary"
import { RefreshStorage } from "./Datadealer"

export function manualAddBookMark(dictionary){
    if (dictionary.name === "") window.alert("No name")
    else if (dictionary.url === "") window.alert("No URL")
    else{
        addBookMarks(dictionary)
        RefreshStorage()
        window.location.reload()
    }
}