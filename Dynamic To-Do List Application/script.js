let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoInput = document.getElementById("todo-input");
const saveBtn = document.getElementById('save-todo');
const todosContainer = document.querySelector(".todos");

saveBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text === "") return;

    const todo = {
        id: crypto.randomUUID(),
        text,
        completed: false
    };

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = '';

    renderTodos();
});

function renderTodos() {
    todosContainer.innerHTML = '';

    todos.forEach((todo) => {
        todosContainer.innerHTML += `
        <div class="todo">
            <div class="checkbox-text">
                <input type="checkbox" id=${todo.id} data-id=${todo.id} class="todo-checkbox" ${todo.completed ? "checked" : ""}>
                <label for="${todo.id}" class=${todo.completed ? "todo-completed" : ""}>${todo.text}</label>
            </div>
            <div class='edit-del'>
                <i class="fa-solid fa-pen edit" data-id=${todo.id}></i>
                <i class="fa-solid fa-trash-can del" data-id=${todo.id}></i>
            </div>
        </div>
        `;
    });
}

renderTodos();

todosContainer.addEventListener('change', (e) => {
    if (!e.target.classList.contains("todo-checkbox")) return;
    const id = e.target.dataset.id;
    const todo = todos.find(todo => todo.id === id);
    todo.completed = e.target.checked;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
});

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

todosContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('del')) {
        return;
    }
    if (!confirm("Do you really want to delete the selected todo?")) {
        return;
    }
    const id = e.target.dataset.id;
    deleteTodo(id);
});


todosContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('edit')) {
        return;
    }
    const id = e.target.dataset.id;
    const todo = todos.find(todo => todo.id === id);
    todoInput.value = todo.text;
    deleteTodo(id);
    todoInput.focus();
});