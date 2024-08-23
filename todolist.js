document.querySelector('.add-button').addEventListener('click', () => {
    todo();
});
document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Enter')
        todo();
})
const todo_list = JSON.parse(localStorage.getItem('todo_list')) || [];
const todo_list_time = JSON.parse(localStorage.getItem('todo_list_time')) || [];
renderTodoList();
function todo(){
    let todo = document.querySelector('.input-todo').value;
    if(todo === ''){
        alert("Please enter a todo");
        return false;
    }
    todo_list.push(todo);
    let todo_time = document.querySelector('.input-todo-time').value;
    todo_list_time.push(todo_time);
    document.querySelector('.input-todo').value = '';
    document.querySelector('.input-todo-time').value = '';
    renderTodoList();
}
function renderTodoList(){
    let todo_display = '';
    for(let i = 0; i < todo_list.length; i++){
        const para = `<div>${todo_list[i]}</div><div>${todo_list_time[i]}</div><div><button class="delete-button" onclick = "todo_list.splice(${i}, 1);
        todo_list_time.splice(${i}, 1);
        renderTodoList();">Delete</button></div>`;
        todo_display += para;
    }
    localStorage.setItem('todo_list',JSON.stringify(todo_list));
    localStorage.setItem('todo_list_time',JSON.stringify(todo_list_time));
    document.querySelector('.display-todo').innerHTML = todo_display;
}