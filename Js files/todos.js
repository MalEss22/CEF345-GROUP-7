let todos = [];
let editIndex = -1;
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText) {
        if (editIndex > -1) {
            todos[editIndex].text = todoText;
            editIndex = -1;
        } else {
            todos.push({ text: todoText, completed: false });
        }
        input.value = '';
        renderList();
    }
}
function renderList() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
                <input type="checkbox" onchange="toggleCompletion(${index})" ${todo.completed ? 'checked' : ''}>
                <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
                <span class="edit" onclick="editTodo(${index})">Edit</span>
                <span class="delete" onclick="deleteTodo(${index})">Delete</span>
            `;
        list.appendChild(li);
    });
}
function editTodo(index) {
    const input = document.getElementById('todoInput');
    input.value = todos[index].text;
    editIndex = index;
}
function deleteTodo(index) {
    todos.splice(index, 1);
    renderList();
}
const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    document.title = '${category} Tasks'; // Set the page title

    // You can now use the 'category' variable to load tasks specific to this category
    console.log('Loading tasks for category: ${category}');