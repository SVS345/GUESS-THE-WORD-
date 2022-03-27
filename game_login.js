function adduser(){
    
    player1=document.getElementById("Player1").value;
    player2=document.getElementById("Player2").value;

localStorage.setItem("P1",player1);
localStorage.setItem("P2",player2);

window.location="game_page.html";
}