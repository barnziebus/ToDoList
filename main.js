import { newTodoListItem } from "./newListItem.js";

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addRowButton");
    const gridContainer = document.getElementById("todoListContainer");

    addButton.addEventListener("click", function() {
        // Create new row
        console.log(`Create new row button pressed`);

        createExampleRow(gridContainer)
    });
});



function createExampleRow(todoListContainer) {
    new newTodoListItem(todoListContainer)
}