function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value));
        
        var deleteBtn = document.createElement("span");
        deleteBtn.appendChild(document.createTextNode("❌"));
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = function () {
            li.remove();
        };
        
        li.appendChild(deleteBtn);
        li.onclick = function () {
            li.classList.toggle("completed");
        };
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

