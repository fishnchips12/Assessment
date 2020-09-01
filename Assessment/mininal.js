function formInvitation() {
    const Username = document.getElementById("Username").value;
    const Password = document.getElementById("Password").value;
    const IncorrectUsername = document.getElementById("usernameIncorrect");
    const IncorrectPassword = document.getElementById("passwordIncorrect");

    if (Username != "admin" || Password != "admin") {
        IncorrectPassword.style.visibility="visible";
        IncorrectUsername.style.visibility="visible";
        alert("Yo wrong");
    }
    else {
        window.location.replace("Home.html");
    }
    return;
}