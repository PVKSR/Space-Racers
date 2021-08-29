var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var ship1, ship2, ship3, ship4;
var ships=[]

var ss1,ss2,ss3,ss4,bg;

function preload(){

  ss1 = loadImage("ss1.png");
  ss2 = loadImage("ss2.png");
  ss3 = loadImage("ss3.png");
  ss4 = loadImage("ss4.png");

  bg = loadImage("bk.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  backgroundImage = loadImage("bk.jpg");

}


function draw(){
  background(backgroundImage)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){

    text("Game End")

  }
 
  console.log(mouseY)

}
