export class DataHandler {
    constructor() {
        this.userData = []
        this.id = 0 //create fucntion to search for highest id in array
        //load data here
    }

    addTask(taskData) {
        let task = {"id": this.id, "task": null, "comment": null, "done": false}
        this.userData.push(task);
        this.id ++;
    }

    removeTask(taskToRemove) {
        let index = this.findIndexByTaskname(taskToRemove);
        this.userData.splice(index, 1);
    }

    findIndexByTaskname(taskToRemove) {
        for (let i = 0; i<this.userData.length; i++) {
            if(this.userData[i]["task"] === taskToRemove) {
                return i;
            };
        };

        return -1;
    }
}