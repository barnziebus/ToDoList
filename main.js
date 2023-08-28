import { newTodoListItem } from "./newListItem.js";

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addRowButton");
    const debugButton = document.getElementById("debug");
    const todoListContainer = document.getElementById("todoListContainer");

    loadData(todoListContainer);

    addButton.addEventListener("click", function() {
        //console.log(`Create new row button pressed`);
        addRow(todoListContainer);
    });

    debugButton.addEventListener("click", function() {
        logData(todoListContainer);
    });


});


function addRow(todoListContainer) {
    createNewRow(todoListContainer);
    saveData(todoListContainer);
}


function createNewRow(todoListContainer) {
    const newTodoTask = new newTodoListItem(todoListContainer)

    return newTodoTask;
}

function saveData(todoListContainer) {
    const rows = todoListContainer.querySelectorAll(".row");
    const data = [];

    console.log(rows)

    rows.forEach(row => {
        const taskInput = row.querySelector("#taskInput");
        const commentInput = row.querySelector("#commentInput");
        const tickbox = row.querySelector("#tickboxInput");

        const taskData = {
            task: taskInput.value,
            comment: commentInput.value,
            done: tickbox.checked,
        };

        data.push(taskData);
        console.log(taskInput.value)
    });

    localStorage.setItem("todoListData", JSON.stringify(data));
}

function loadData(todoListContainer) {
    const savedData = localStorage.getItem("todoListData");

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        parsedData.forEach(taskData => createNewRow(todoListContainer, taskData))
    }
}

function logData(todoListContainer) {
    const savedData = localStorage.getItem("todoListData");

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        console.log(parsedData)
    } else {
        console.log(`no data to log`)
    }
}