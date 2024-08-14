const formElement = document.querySelector("form")
const errorPassword = document.getElementById("error-password")
const errorUsername = document.getElementById("error-username")
console.log(errorPassword)
formElement.addEventListener("submit", function (event) {
    errorPassword.textContent = ""
    errorUsername.textContent = ""
    event.preventDefault()
    const formData = new FormData(event.target)
    const userName = formData.get("username")
    const password = formData.get("password")
    if (!userName || !password) {
        if (!password && userName) {
            errorPassword.style.color = "red"
            errorPassword.textContent = "please enter a valid password!"
            return
        }
        if (!userName && password) {
            errorUsername.style.color = "red"
            errorUsername.textContent = "please enter a valid username! "
            return
        }
        
        return
    }
})
