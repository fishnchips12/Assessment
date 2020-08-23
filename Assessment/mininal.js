function formInvitation() {
    var incorrectpwd = document.getElementById("Incorrectpwd");
    var inccorectUser = document.getElementById("IncorrectUser");
    
    var y = document.forms["login"]["user"].value;
    var x = document.forms["login"]["pass"].value;
    if (x == "" || y == "") {
        
    }
    else if (x != "admin" || y != "admin") {
        alert("You have entered the incorrect password or username");
    }
    else {
        window.location.replace("Home.html");
    }
}

function working() {
    window.open("Home.html");

}