const toDoForm = document.querySelector('#toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => {
      showToDos(toDo.name);
    });
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deletToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function showToDos(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  delBtn.innerHTML = '❌';
  delBtn.addEventListener('click', deletToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = newId;
  const toDoObject = {
    name: text,
    id: newId,
  };
  toDos.push(toDoObject);
  saveToDos();
}

function submitHandler(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  showToDos(currentValue);
  toDoInput.value = '';
}

function initToDoApp() {
  loadToDos();
  toDoForm.addEventListener('submit', submitHandler);
}

export { initToDoApp };