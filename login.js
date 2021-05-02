function Log_in(){
    USER_NAME = document.getElementById("user_name").value;
    window.location = "index.html";
    localStorage.setItem("username",USER_NAME);
}