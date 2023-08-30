//import { DataHandler } from "./dataHandler.js";
import { newTodoListItem } from "./newListItem.js";

let rowInstances = []
let taskId = 1

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addRowButton");
    const todoListContainer = document.getElementById("todoListContainer");

    addButton.addEventListener("click", function() {
        addRow(todoListContainer);
    });

    addRow(todoListContainer)
});

function addRow(todoListContainer) {
    let blankRowData = {}
    let newTodoTask = new newTodoListItem(todoListContainer, saveData, blankRowData, deleteRow, taskId)
    rowInstances.push(newTodoTask)

    taskId += 1;
}

function deleteRow(taskIdToDelete) {
    let index = rowInstances.findIndex(instance => instance.Id === taskIdToDelete);
    rowInstances.splice(index, 1)
}  

function saveData() {
    return
}