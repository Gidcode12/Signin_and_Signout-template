const formElement = document.querySelector("form");
const errorPassword = document.getElementById("error-password");
const errorUsername = document.getElementById("error-username");
const checkboxErrorMessage = document.getElementById("checkbox-error");
const checkBox = document.getElementById("terms-and-condition");
console.log(errorPassword);
formElement.addEventListener("submit", function (event) {
  errorPassword.textContent = "";
  errorUsername.textContent = "";
  event.preventDefault();
  const formData = new FormData(event.target);
  const userName = formData.get("username");
  const password = formData.get("password");
  errorUsername.style.color = "red";
  errorPassword.style.color = "red";
  if (!userName || !password) {
    if (!userName) {
      errorUsername.innerHTML = "please enter a  username! ";
      return;
    }
    if (!password) {
      errorPassword.textContent = "please entere a password";
      return;
    }

    errorUsername.textContent = "please enter a valid username! ";
    errorPassword.textContent = "please enter a valid password!";
    return;
  }
  if (!checkBox.checked) {
    event.preventDefault(); // Prevent form submission
    checkboxErrorMessage.innerHTML =
      "You must agree to <br/> the terms and conditions.";
    checkboxErrorMessage.style.display = "block";
    return;
  } else {
    checkboxErrorMessage.textContent = "";
  }
  let popup = document.getElementById("popup");
  popup.classList.add("show");
  setTimeout(function () {
    popup.classList.remove("show");
  }, 5000);
});
