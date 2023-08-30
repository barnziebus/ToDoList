import { DataHandler } from "./dataHandler.js";
import { newTodoListItem } from "./newListItem.js";

let db = new DataHandler()

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addRowButton");
    const todoListContainer = document.getElementById("todoListContainer");

    if (db.userData.length === 0) {
        addRow(todoListContainer)
    }
    //buildTodoList(masterData, todoListContainer)

    addButton.addEventListener("click", function() {
        let lastIndex = db.userData.length - 1
        if (db.userData[lastIndex]["task"] === null) {
            return
        }
        addRow(todoListContainer);
    });
});

function addRow(todoListContainer) {
    let blankRowData = {}
    db.addTask(newTodoTask)
    let newTodoTask = new newTodoListItem(todoListContainer, saveData, blankRowData, db.userData, deleteRow)
    console.log(db.userData)
}

function deleteRow(taskToDelete) {
    db.removeTask(taskToDelete)
}  

function saveData() {
    return
}