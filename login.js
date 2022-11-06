const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greeting2 = document.querySelector("#greeting2");

const message = ["I hope you have a good day today", "Health is the best"];
const changeMessage = message[Math.floor(Math.random() * message.length)];
function handleSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting2.innerText = changeMessage;
  greeting.classList.remove("hidden");
  greeting2.classList.remove("hidden");
}
loginForm.addEventListener("submit", handleSubmit);
const savedUsername = localStorage.getItem("username");
if (savedUsername === null) {
  loginForm.classList.remove("hidden");
} else {
  paintGreeting(savedUsername);
  loginForm.classList.add("hidden");
}
