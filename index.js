var player1 = Math.floor(Math.random()*6) + 1;
var player2 = Math.floor(Math.random()*6) + 1;

if (player1 === 1){
  document.querySelector(".dice1 .img1").classList.remove("hidden");
  document.querySelector(".dice1 .img2").classList.add("hidden");
  document.querySelector(".dice1 .img3").classList.add("hidden");
  document.querySelector(".dice1 .img4").classList.add("hidden");
  document.querySelector(".dice1 .img5").classList.add("hidden");
  document.querySelector(".dice1 .img6").classList.add("hidden");
}
else if (player1 === 2) {
    document.querySelector(".dice1 .img2").classList.remove("hidden");
    document.querySelector(".dice1 .img1").classList.add("hidden");
    document.querySelector(".dice1 .img3").classList.add("hidden");
    document.querySelector(".dice1 .img4").classList.add("hidden");
    document.querySelector(".dice1 .img5").classList.add("hidden");
    document.querySelector(".dice1 .img6").classList.add("hidden");
}
else if (player1 === 3) {
    document.querySelector(".dice1 .img3").classList.remove("hidden");
    document.querySelector(".dice1 .img1").classList.add("hidden");
    document.querySelector(".dice1 .img2").classList.add("hidden");
    document.querySelector(".dice1 .img4").classList.add("hidden");
    document.querySelector(".dice1 .img5").classList.add("hidden");
    document.querySelector(".dice1 .img6").classList.add("hidden");
}
else if (player1 === 4) {
    document.querySelector(".dice1 .img4").classList.remove("hidden");
    document.querySelector(".dice1 .img1").classList.add("hidden");
    document.querySelector(".dice1 .img3").classList.add("hidden");
    document.querySelector(".dice1 .img2").classList.add("hidden");
    document.querySelector(".dice1 .img5").classList.add("hidden");
    document.querySelector(".dice1 .img6").classList.add("hidden");
}
else if (player1 === 5) {
    document.querySelector(".dice1 .img5").classList.remove("hidden");
    document.querySelector(".dice1 .img1").classList.add("hidden");
    document.querySelector(".dice1 .img3").classList.add("hidden");
    document.querySelector(".dice1 .img4").classList.add("hidden");
    document.querySelector(".dice1 .img2").classList.add("hidden");
    document.querySelector(".dice1 .img6").classList.add("hidden");
}
else if (player1 === 6) {
    document.querySelector(".dice1 .img6").classList.remove("hidden");
    document.querySelector(".dice1 .img1").classList.add("hidden");
    document.querySelector(".dice1 .img3").classList.add("hidden");
    document.querySelector(".dice1 .img4").classList.add("hidden");
    document.querySelector(".dice1 .img5").classList.add("hidden");
    document.querySelector(".dice1 .img2").classList.add("hidden");
}

if (player2 === 1){
  document.querySelector(".dice2 .img1").classList.remove("hidden");
  document.querySelector(".dice2 .img2").classList.add("hidden");
  document.querySelector(".dice2 .img3").classList.add("hidden");
  document.querySelector(".dice2 .img4").classList.add("hidden");
  document.querySelector(".dice2 .img5").classList.add("hidden");
  document.querySelector(".dice2 .img6").classList.add("hidden");
}
else if (player2 === 2) {
    document.querySelector(".dice2 .img2").classList.remove("hidden");
    document.querySelector(".dice2 .img1").classList.add("hidden");
    document.querySelector(".dice2 .img3").classList.add("hidden");
    document.querySelector(".dice2 .img4").classList.add("hidden");
    document.querySelector(".dice2 .img5").classList.add("hidden");
    document.querySelector(".dice2 .img6").classList.add("hidden");
}
else if (player2 === 3) {
    document.querySelector(".dice2 .img3").classList.remove("hidden");
    document.querySelector(".dice2 .img1").classList.add("hidden");
    document.querySelector(".dice2 .img2").classList.add("hidden");
    document.querySelector(".dice2 .img4").classList.add("hidden");
    document.querySelector(".dice2 .img5").classList.add("hidden");
    document.querySelector(".dice2 .img6").classList.add("hidden");
}
else if (player2 === 4) {
    document.querySelector(".dice2 .img4").classList.remove("hidden");
    document.querySelector(".dice2 .img1").classList.add("hidden");
    document.querySelector(".dice2 .img3").classList.add("hidden");
    document.querySelector(".dice2 .img2").classList.add("hidden");
    document.querySelector(".dice2 .img5").classList.add("hidden");
    document.querySelector(".dice2 .img6").classList.add("hidden");
}
else if (player2 === 5) {
    document.querySelector(".dice2 .img5").classList.remove("hidden");
    document.querySelector(".dice2 .img1").classList.add("hidden");
    document.querySelector(".dice2 .img3").classList.add("hidden");
    document.querySelector(".dice2 .img4").classList.add("hidden");
    document.querySelector(".dice2 .img2").classList.add("hidden");
    document.querySelector(".dice2 .img6").classList.add("hidden");
}
else if (player2 === 6) {
    document.querySelector(".dice2 .img6").classList.remove("hidden");
    document.querySelector(".dice2 .img1").classList.add("hidden");
    document.querySelector(".dice2 .img3").classList.add("hidden");
    document.querySelector(".dice2 .img4").classList.add("hidden");
    document.querySelector(".dice2 .img5").classList.add("hidden");
    document.querySelector(".dice2 .img2").classList.add("hidden");
}

if(player1>player2)
{
  document.querySelector("h1").textContent = "Player 1 is the winner";
}
else if(player1<player2)
{
  document.querySelector("h1").textContent = "Player 2 is the winner";
}
else{
  document.querySelector("h1").textContent = "Draw";
}
