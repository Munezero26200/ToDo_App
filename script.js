const form= document.getElementById("todo-form");
const input= document.getElementById("todo-input");
const list= document.getElementById("todo-list");

form.addEventListener("submit",event=>{
   event.preventDefault();//stop page reload.
   const taskText=input.value.trim();
   if(taskText !== ""){
     addTask(taskText);
     input.value="";//clear input
   }
});
const addTask= text=>{
    const li= document.createElement("li");
    li.className="flex items-center justify-center bg-gray-100 px-4 py-y2 rounded-lg";

    const span= document.createElement("span");
    span.textContent=text;
    //Mark task as completed on click
    span.addEventListener("click", () => {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-500");
  });

    //delete button
    const deleteBtn= document.createElement("button");
    deleteBtn.innerHTML="🗑️";
    deleteBtn.className="ml-4 text-red-500"
    deleteBtn.addEventListener("click", ()=>{
        li.remove();
    });
    //put span and button inside list item
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}