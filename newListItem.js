export class newTodoListItem {
    constructor(todoListContainer, saveData, rowData, database, deleteRow) {
        this.listContainer = todoListContainer
        this.saveData = saveData //save data function passed from main.js
        this.deleteRow = deleteRow //delete row function passed from main.js

        this.db = database

        this.task = null
        this.comment = null
        this.done = null

        if ('task' in rowData && 'comment' in rowData && 'done' in rowData) {
            this.task = rowData['task']
            this.comment = rowData['comment']
            this.done = rowData['done']
        }

        this.masterData = masterData

        this.buildRow(todoListContainer, masterData)
    }

    buildRow(container) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row");

        this.buildTaskCell(rowContainer);
        this.buildCommentCell(rowContainer);
        this.addTickBox(rowContainer);
        this.addDeleteButton(rowContainer, this.masterData);

        container.appendChild(rowContainer);
    }

    buildTaskCell(container) {
        let taskCellContainer = document.createElement("div");
        let taskCellContent = document.createElement("input");

        taskCellContainer.classList.add("item")

        taskCellContent.placeholder = `Example Text Content`;
        taskCellContent.id = "taskInput";
        taskCellContent.value = this.task

        this.handleInputChange(taskCellContent)

        taskCellContainer.appendChild(taskCellContent)
        container.appendChild(taskCellContainer);
    }

    buildCommentCell(container) {
        let commentCellContainer = document.createElement("div");
        let commentCellContent = document.createElement("input");

        commentCellContainer.classList.add("item");
        
        commentCellContent.placeholder = `Example comment`;
        commentCellContent.id = "commentInput";
        commentCellContent.value = this.comment

        this.handleInputChange(commentCellContent)

        commentCellContainer.appendChild(commentCellContent);
        container.appendChild(commentCellContainer);
    }

    addTickBox(container) {
        let tickboxContainer = document.createElement("div");
        let tickboxContent = document.createElement("input");

        tickboxContainer.classList.add("item");

        tickboxContent.type = "checkbox";
        tickboxContent.id = "tickboxInput";
        tickboxContent.value = this.comment

        this.handleInputChange(tickboxContent)

        tickboxContainer.appendChild(tickboxContent);
        container.appendChild(tickboxContainer);
    }

    addDeleteButton(container) {
        let deleteButtonContainer = document.createElement("div");
        let deleteButton = document.createElement("button");

        deleteButtonContainer.classList.add("item");

        deleteButton.innerText = `🗑`;
        deleteButton.addEventListener("click", () => {
            this.deleteRow(this.task)
            container.remove()
        }) 

        deleteButtonContainer.appendChild(deleteButton);
        container.appendChild(deleteButtonContainer);
    }

    handleInputChange(element) {
        element.addEventListener("change", () => {
            this.task = this.listContainer.querySelector("#taskInput").value;
            this.comment = this.listContainer.querySelector("#commentInput").value;
            this.done = this.listContainer.querySelector("#tickboxInput").checked;

            this.db
        }); 
    }    
}