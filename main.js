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
    let rowInstancesJSON = JSON.stringify(rowInstances)
    let taskIdJSON = JSON.stringify(taskId)

    localStorage.setItem("row instances", rowInstancesJSON)
    localStorage.setItem("task id", taskIdJSON)
}

function loadData() {
    rowInstances = JSON.parse(localStorage.getItem("row instances"))
    taskId = JSON.parse(localStorage.getItem("task id"))
}

// save the list data into an object then instance the new todlist objects from the data