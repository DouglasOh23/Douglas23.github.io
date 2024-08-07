const loginButton = document.getElementById("loginbutton");
const loginPopup = document.getElementById("login-popup");
const closeIcon = document.getElementById("close-icon");

loginButton.addEventListener("click", () => {
  loginPopup.classList.toggle("show");
});

closeIcon.addEventListener("click", (e) => {
  loginPopup.classList.remove("show");
});

// Add an event listener to close the popup when the user clicks outside of it
document.addEventListener("click", (e) => {
  if (e.target !== loginPopup && e.target !== loginButton && e.target !== closeIcon) {
    loginPopup.classList.remove("show");
  }
});

function showLoginForm() {
  const loginPopup = document.getElementById("login-popup");
  loginPopup.classList.toggle("show");
}

