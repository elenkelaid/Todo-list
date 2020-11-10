const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);

function addTodo(event) {
    //not to submit automatically
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);
    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //append list
    todoList.appendChild(todoDiv);
    //clear todo input
    todoInput.value = "";
}

function deleteItem(e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}