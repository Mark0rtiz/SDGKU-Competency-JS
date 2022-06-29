document.querySelector('form').addEventListener('submit', submitForm);
document.querySelector('ul').addEventListener('click', handleClickCheck)
document.getElementById('clearAll').addEventListener('click', handleClearAll);
function submitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handleClickCheck(e) {

    if (e.target.name == 'deleteButton')
    deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = ''; 
}

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-thing">${todo}</span>
        <button name="deleteButton"><i class="fa-solid fa-trash-can"></i></button>
    `;
    li.classList.add('todo-list-thing')
    ul.appendChild(li);
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function() {item.remove();
    })
    item.classList.add('todo-list-thing-fall');

}