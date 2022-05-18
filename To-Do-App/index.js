const form  = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(){
    const todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement("li")
        todoEl.innerText = todoText;
        todos.appendChild(todoEl)

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
            updateLs();
        });
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
        })

        input.value = ""
        updateLs()
    }

}
//updating local storage
function updateLs() {
    const todosEl = document.querySelectorAll("li");
    const todos = []
    
    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos))
    
}