document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addRowButton");
    const gridContainer = document.getElementById("todoListContainer");

    addButton.addEventListener("click", function() {
        // Create new row
        console.log(`Create new row button pressed`);

        const newRow = document.createElement("div");
        newRow.classList.add("item");

        for (let i = 0; i < 3; i++) {
            const newCell = document.createElement("div");
            newCell.textContent = `Click me`;
            newCell.classList.add("item");

            gridContainer.appendChild(newCell);
        }
    });
});
