function addUser(){
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location ="game_page.html";

}
