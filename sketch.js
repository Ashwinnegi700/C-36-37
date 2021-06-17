var canvas
var backgroundImage
var playerCount 
 var gameState =0
 var database , form , player , game , alllayers
 function setup(){
     canvas=createCanvas(400,400);
     database=firebase.database();
     game=new Game();
     game.getState();
     game.start();
 }
 function draw(){
  // 




}