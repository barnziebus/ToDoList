import { newTodoListItem } from "./newListItem.js";

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addRowButton");
    const gridContainer = document.getElementById("todoListContainer");

    createNewRow(gridContainer)

    addButton.addEventListener("click", function() {
        // Create new row
        console.log(`Create new row button pressed`);

        createNewRow(gridContainer)
    });
});


function createNewRow(todoListContainer) {
    new newTodoListItem(todoListContainer)
}