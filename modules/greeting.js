const form = document.querySelector('#greeting-form');
const input = form.querySelector('input');
const greetings = document.querySelector('#greetings');
const USER_LS = 'currentUsername';
const SHOWING_CN = 'showing';

function saveUsername(text) {
  localStorage.setItem(USER_LS, text);
}

function showGreeting(text) {
  greetings.innerText = `Hello, ${text}!`;
  greetings.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
}

function submitHandler(event) {
  event.preventDefault();
  const inputValue = input.value;
  showGreeting(inputValue);
  saveUsername(inputValue);
}

function askForUsername() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', submitHandler);
}

function loadUsername() {
  const currentUsername = localStorage.getItem(USER_LS);
  if (currentUsername === null) {
    askForUsername();
  } else {
    showGreeting(currentUsername);
  }
}

function initGreeting() {
  loadUsername();
}

export { initGreeting };
