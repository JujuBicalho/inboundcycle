
const sendButton = document.querySelector(".js-button");
const windowOpen = document.querySelector(".formwindow");
const closeBtn = document.querySelector(".js-close");

function sendInfo() {
  windowOpen.style.display = "flex";
}

function closeWindow() {
  windowOpen.style.display = "none";
}

sendButton.addEventListener("click", sendInfo);
closeBtn.addEventListener("click", closeWindow);
