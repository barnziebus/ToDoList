export class newTodoListItem {
    constructor(listContainer, rowData=0) {
        console.log(`Build new row has be initalised from the newTodoListItem class`)
        this.listContainer = listContainer

        this.buildRow(listContainer)
    }

    buildRow(container) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row");

        this.buildTaskCell(rowContainer);
        this.buildCommentCell(rowContainer);
        this.addTickBox(rowContainer);
        this.addDeleteButton(rowContainer);

        container.appendChild(rowContainer);
    }

    buildTaskCell(container) {
        let taskCellContainer = document.createElement("div");
        let taskCellContent = document.createElement("input");

        taskCellContainer.classList.add("item")

        taskCellContent.placeholder = `Example Text Content`;
        taskCellContent.id = "taskInput";

        taskCellContainer.appendChild(taskCellContent)
        container.appendChild(taskCellContainer);
    }

    buildCommentCell(container) {
        let commentCellContainer = document.createElement("div");
        let commentCellContent = document.createElement("input");

        commentCellContainer.classList.add("item");
        
        commentCellContent.placeholder = `Example comment`;
        commentCellContent.id = "commentInput";

        commentCellContainer.appendChild(commentCellContent);
        container.appendChild(commentCellContainer);
    }

    addTickBox(container) {
        let tickboxContainer = document.createElement("div");
        let tickboxContent = document.createElement("input");

        tickboxContainer.classList.add("item");

        tickboxContent.type = "checkbox";
        tickboxContent.id = "tickboxInput";

        tickboxContainer.appendChild(tickboxContent);
        container.appendChild(tickboxContainer);
    }

    addDeleteButton(container) {
        let deleteButtonContainer = document.createElement("div");
        let deleteButton = document.createElement("button");

        deleteButtonContainer.classList.add("item");

        deleteButton.innerText = `🗑`;
        deleteButton.addEventListener("click", () => {
            //console.log(`Delete button clicked`)
            this.deleteRow(container)
        }) 

        deleteButtonContainer.appendChild(deleteButton);
        container.appendChild(deleteButtonContainer);
    }

    deleteRow(container) {
        container.remove();
    }
}