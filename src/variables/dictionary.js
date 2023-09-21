import { RefreshStorage } from "../Functions/Datadealer"

export var bookMarks = []

export const setBookMarks = (value) =>{
    bookMarks = value
}
export const addBookMarks = (value) =>{
    bookMarks.push(value)
}

export const manualDeleteBookMark = (index) => {
    if (window.confirm('Do you want to delete "' + bookMarks[index].name + '" ?')) {
        bookMarks.splice(index, 1); 
        RefreshStorage();
        window.location.reload();
  }
};