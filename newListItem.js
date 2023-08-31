export class todoListItem {
    constructor(todoListContainer, rowData, saveDataFunc, deleteRowFunc, updateUserData) {
        this.listContainer = todoListContainer

        this.saveData = saveDataFunc //save data function passed from main.js
        this.deleteRow = deleteRowFunc //delete row function passed from main.js
        this.updateUserData = updateUserData //function used to modify user data for save loading

        this.id = rowData["id"]

        this.task = null
        this.comment = null
        this.complete = null

        this.setRowData(rowData)
        this.buildRow(todoListContainer)
    }

    setRowData(rowData) {
        if ('task' in rowData) {
            this.task = rowData['task']
        } 
        if ('comment' in rowData) {
            this.comment = rowData['comment']
        } 
        if ('complete' in rowData) {
            this.done = rowData['complete']
        }
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
        taskCellContent.value = this.task

        taskCellContainer.appendChild(taskCellContent)
        container.appendChild(taskCellContainer);

        taskCellContent.addEventListener("change", () => {
            this.task = taskCellContent.value;
            this.todoItemDataHandler()
        }); 
    }

    buildCommentCell(container) {
        let commentCellContainer = document.createElement("div");
        let commentCellContent = document.createElement("input");

        commentCellContainer.classList.add("item");
        
        commentCellContent.placeholder = `Example comment`;
        commentCellContent.id = "commentInput";
        commentCellContent.value = this.comment

        commentCellContent.addEventListener("change", () => {
            this.comment = commentCellContent.value
            this.todoItemDataHandler()
        }); 

        commentCellContainer.appendChild(commentCellContent);
        container.appendChild(commentCellContainer);
    }

    addTickBox(container) {
        let tickboxContainer = document.createElement("div");
        let tickboxContent = document.createElement("input");

        tickboxContainer.classList.add("item");

        tickboxContent.type = "checkbox";
        tickboxContent.id = "tickboxInput";
        tickboxContent.checked = this.done

        tickboxContent.addEventListener("change", () => {
            this.complete = tickboxContent.checked
            this.todoItemDataHandler()
        }); 

        tickboxContainer.appendChild(tickboxContent);
        container.appendChild(tickboxContainer);
    }

    addDeleteButton(container) {
        let deleteButtonContainer = document.createElement("div");
        let deleteButton = document.createElement("button");

        deleteButtonContainer.classList.add("item");

        deleteButton.innerText = `🗑`;
        deleteButton.addEventListener("click", () => {
            this.deleteRow(this.id)
            container.remove()
        }) 

        deleteButtonContainer.appendChild(deleteButton);
        container.appendChild(deleteButtonContainer);
    }
    
    todoItemDataHandler() {
        this.updateUserData(this.id, this.task, this.comment, this.complete)
    }
}