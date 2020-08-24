const Username = document.getElementById("Username");
const Password = document.getElementById("Password");
const form = document.getElementById("Form");
const IncorrectUsername = document.getElementById("usernameIncorrect");
const IncorrectPassword = document.getElementById("passwordIncorrect");


form.addEventListener("submit", (e) => {
    if (Username.value == null || Password.value == null) {
        window.alert("yp");

    }
    
})
