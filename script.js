const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", event => {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        input.value = "";
    }
});
const addTask = text => {
    const li = document.createElement('li');
    li.className = "flex items-center justify-between bg-green-100 px-4 py-2 rounded-2xl"

    const span = document.createElement("span");
    span.textContent = text;
    span.className = "cursor-pointer"
    //mark a completed task
    span.addEventListener("click", () => {
        span.classList.toggle("line-through");
        span.classList.toggle("text-gray-500");
    });
    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "ml-4"
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
};
