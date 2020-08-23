function formInvitation() {
    var y = document.forms["login"]["user"].value;
    var x = document.forms["login"]["pass"].value;
    if (x == "" || y == "") {
        alert("You have not filled out all that is neccessary");
    }
    else if (x != "admin" || y != "admin") {
        alert("You have entered the incorrect password or username");
    }
    else {
        window.location = "https://www.tutorialspoint.com";
    }
}
