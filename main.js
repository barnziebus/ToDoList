//import { DataHandler } from "./dataHandler.js";
import { todoListItem } from "./newListItem.js";

let rowInstances = []
let taskId = null
let userData = null

document.addEventListener("DOMContentLoaded", function() {
    taskId = 1
    userData = loadData()

    const addButton = document.getElementById("addRowButton");
    const todoListContainer = document.getElementById("todoListContainer");

    addButton.addEventListener("click", function() {
        addBlankRow(todoListContainer, userData);
    });

    initTodoList(todoListContainer, userData);
});

function initTodoList(todoListContainer, userData) {
    loadData(userData);
    if (userData.length > 0) {
        for (let row in userData) {
            let rowData = userData[row];
            new todoListItem(todoListContainer, rowData, saveData, deleteTaskData, updateUserData);
        }
    }
}

function addBlankRow(todoListContainer, userData) {
    let blankRowData = {"id": taskId, "task": null, "comment": null, "complete": false};
    new todoListItem(todoListContainer, blankRowData, saveData, deleteTaskData, updateUserData);
    userData.push(blankRowData);

    taskId += 1;
    saveData()
}

function deleteTaskData(taskIdToDelete) {
    console.log(taskIdToDelete)
    let index = userData.findIndex(instance => instance.id === taskIdToDelete); //find the data in the userdata list based on the object's id
    userData.splice(index, 1) //remove the object based on its index
    console.log(userData)
    saveData()
}  

function saveData() {
    let userDataJSON = JSON.stringify(userData)
    let taskIdJSON = JSON.stringify(taskId)

    localStorage.setItem("user data", userDataJSON)
    localStorage.setItem("task id", taskIdJSON)
}

function loadData() {
    let loadedData = JSON.parse(localStorage.getItem("user data"))
    taskId = JSON.parse(localStorage.getItem("task id"))

    if (loadedData) {
        return loadedData
    } else {
        loadedData = [{"id": 0, "task": "Teach pet rock new tricks", "comment": "Be patient he's a slow learner", "complete": false}] //list of objects {id: int, task: str, comment: str, complete: bool}
        return loadedData
    }
}

function updateUserData(taskId, task, comment, complete) {
    let index = userData.findIndex(instance => instance.id === taskId);
    userData[index]["task"] = task;
    userData[index]["comment"] = comment;
    userData[index]["complete"] = complete;

    saveData()
}