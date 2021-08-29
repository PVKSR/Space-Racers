class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    background(backgroundImage);

    ship1 = createSprite(100,200);
    ship1.addImage("ship1",ss1)

    ship2 = createSprite(400,200);
    ship2.addImage("ship2",ss2)
    
    ship3 = createSprite(700,200);
    ship3.addImage("ship3",ss3)
    
    ship4 = createSprite(1000,200);
    ship4.addImage("ship4",ss4)

    ships = [ship1, ship2, ship3, ship4];

  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){

      image(bg,0,-displayHeight*2,displayWidth,displayHeight*5)

      var index = 0;
      var x = 0;
      var y ;
      //var display_position = 130;
      for(var plr in allPlayers){
        index = index + 1
        x = x + 250
        y = displayHeight - allPlayers[plr].distance;
        
        ships[index - 1].x = x;
        ships[index - 1].y = y;
 
        if(index === player.index){

          ships[index - 1].shapeColor = "red"

          camera.position.x = displayWidth/2;
          camera.position.y = ships[index - 1].y;

 

        }

         /*if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 1810){

      gameState = 2

    }

    drawSprites();

  }
}
