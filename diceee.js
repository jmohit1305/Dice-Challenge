var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imageSelector1 = "images/dice" + randomNumber1 + ".png";

var player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src", imageSelector1);




var randomNumber2 = Math.floor(Math.random() * 6 )+ 1;

var imageSelector2 = "images/dice" + randomNumber2 + ".png";

var player2 = document.querySelectorAll("img")[1];

player2.setAttribute("src" , imageSelector2);




if(randomNumber1 > randomNumber2)
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
else if(randomNumber1 < randomNumber2)
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
else if(randomNumber1 === randomNumber2)
  document.querySelector("h1").innerHTML = "Draw!";
