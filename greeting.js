const greetingForm = document.querySelector("form"),
  greetingInput = greetingForm.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_NAME_LS_KEY = "currentUserName",
  SHOWING_CLASS = "showing";

const saveName = (text) => {
  localStorage.setItem(USER_NAME_LS_KEY, text);
};

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  greetingInput.value = null;
}

const askForName = () => {
  greetingForm.classList.add(SHOWING_CLASS);
  greetingForm.addEventListener("submit", handleSubmit);
};

const paintGreeting = (text) => {
  greetingForm.classList.remove(SHOWING_CLASS);
  greeting.classList.add(SHOWING_CLASS);
  greeting.innerText = `Hello, ${text}`;
};

const loadName = () => {
  const currentUserName = localStorage.getItem(USER_NAME_LS_KEY);
  if (currentUserName === null) {
    askForName();
  } else {
    paintGreeting(currentUserName);
  }
};

function initState() {
  loadName();
}

initState();
