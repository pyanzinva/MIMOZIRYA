function createTaskElement(taskText) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));

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

    return li;
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value) {
        var li = createTaskElement(taskInput.value);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteAllTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    if (taskList.children.length === 0) {
        var li = createTaskElement("Не найдено ни одного дела");
        taskList.appendChild(li);
        centerNoTasksMessage();
    }
}

function centerNoTasksMessage() {
    var taskList = document.getElementById("taskList");
    var noTasksElement = taskList.querySelector('li');
    
    if (noTasksElement && noTasksElement.textContent === "Не найдено ни одного дела") {
        noTasksElement.style.textAlign = "center";
        noTasksElement.style.padding = "20px"; // optional: add some padding for better visibility
    }
}
