const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", generateTodo);
todoList.addEventListener("click", situationCheck);
filterOption.addEventListener("click", filterTodo);

function addTodo(event) {
    // Create TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    todoInput.value = "";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // Check Mark Button
    const complatedButton = document.createElement("button");
    complatedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    complatedButton.classList.add("complated-btn");
    todoDiv.appendChild(complatedButton);
    // Delete Button
    const deletedButton = document.createElement("button");
    deletedButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deletedButton.classList.add("trash-btn");
    todoDiv.appendChild(deletedButton);
    // Append the child
    todoList.appendChild(todoDiv);
}

function generateTodo(event) {
    // For no refresh
    event.preventDefault();
    // If input is empty
    if (todoInput.value == "") {
        alert("Boşluğu doldurunuz.");
    } else {
        addTodo();
    }
}

function situationCheck(e) {
    const item = e.target;
    // Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    // Check Mark
    if (item.classList[0] === "complated-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("complated");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "complated":
                if (todo.classList.contains("complated")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncomplated":
                if (!todo.classList.contains("complated")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
