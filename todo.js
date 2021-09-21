const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = form.querySelector('js-toDoList');

const TODOS_LS = 'toDos';

function loadToDos() {
    const todos = localStorage.getItem(TODOS_LS);
    if (todos !== null) {

    }
}

function showToDos(text) {
    console.log(text);
}

function submitHandler(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDos(currentValue);
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', submitHandler)
}

init();