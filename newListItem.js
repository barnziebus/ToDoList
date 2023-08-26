export class newTodoListItem {
    constructor(listContainer) {
        console.log(`Build new row has be initalised from the newTodoListItem class`)
        this.listContainer = listContainer

        this.buildRow(listContainer)
    }

    buildRow(container) {
        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row")

        this.buildTaskCell(rowContainer)
        this.buildCommentCell(rowContainer)
        this.addTickBox(rowContainer)

        container.appendChild(rowContainer);
    }

    buildTaskCell(container) {
        let taskCellContainer = document.createElement("div");
        let taskCellContent = document.createElement("input");

        taskCellContainer.classList.add("item")

        taskCellContent.placeholder = `Example Text Content`;

        taskCellContainer.appendChild(taskCellContent)
        container.appendChild(taskCellContainer);
    }

    buildCommentCell(container) {
        let commentCellContainer = document.createElement("div");
        let commentCellContent = document.createElement("input");

        commentCellContainer.classList.add("item");
        
        commentCellContent.placeholder = `Example comment`;

        commentCellContainer.appendChild(commentCellContent);
        container.appendChild(commentCellContainer);
    }

    addTickBox(container) {
        let tickboxContainer = document.createElement("div");
        let tickboxContent = document.createElement("input");

        tickboxContainer.classList.add("item");

        tickboxContent.type = "checkbox";

        tickboxContainer.appendChild(tickboxContent);
        container.appendChild(tickboxContainer);
    }
}