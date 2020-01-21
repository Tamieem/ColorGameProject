var color = getRandomRgb();
var gameover = false;
var count = 6;
var squares = document.getElementsByClassName("square");
var message = document.getElementById("message");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

document.querySelector("h1 span").innerHTML = color;

for(var i = 0; i < squares.length; i++){
squares[i].style.backgroundColor = getRandomRgb();
if (i >= count){
  squares[i].style.display = "none";
}
squares[i].addEventListener("click", function(){
  if(!gameover){
    if(this.style.backgroundColor == color){
      correct();
    }
    else {
      message.textContent = "Try Again!";
      this.style.backgroundColor = "#232323";
    }
  }
})
}
squares[getRandomSquare()].style.backgroundColor = color;

document.querySelector("div button").addEventListener("click", function() {
  newGame();

})

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  for(var i = 6; i <9; i++){
    squares[i].style.display = "none";
  }
  count = 6;
  newGame();
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  for(var i = 6; i <9; i++){
    squares[i].style.display = "block";
  }
  count = 9;
  newGame();
});



function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function getRandomSquare(){
  var r = Math.random, s = count-1;
  return Math.round(r()*s)
}

function correct(){
  gameover = true;
  message.textContent = "Correct!";
  for (var i = 0; i < count; i++){
    squares[i].style.backgroundColor = color;
  }
  document.querySelector("h1").style.backgroundColor = color;
}

function newGame(){
  gameover= false;
  color = getRandomRgb();
  message.textContent = "";
  document.querySelector("h1").style.backgroundColor = "steelblue";
  document.querySelector("h1 span").innerHTML = color;
  for(var i = 0; i<count; i++){
    squares[i].style.backgroundColor = getRandomRgb();
  }
  squares[getRandomSquare()].style.backgroundColor = color;
}
