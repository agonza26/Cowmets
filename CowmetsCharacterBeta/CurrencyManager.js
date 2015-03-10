function CurrencyMNGR(){
	this.currentWeapon = "ammo"; 
	this.wepMap = [0,0,0,0];  //each index represents a weapon type, the contents represents the level of its upgrade
	this.drillSpeed = 0;
	this.flySpeed = 0;
	
	
	this.points = 0;
	this.coins = 100;
}


CurrencyMNGR.prototype.update = function(d){	
};




CurrencyMNGR.prototype.drawMenu = function(){
	
	
	
	
	
	
	
	
	
};


/*
 *
 * 
  //Tell the global input object to call handleClicks when the users clicks the canvas
gInput.addLBtnFunc(handleClicks);

function handleClicks(){
  //Get the x and y position of the mouse
  var mouseX = gInput.mouse.x;
  var mouseY = gInput.mouse.y;
  
  //Check if the player clicked new game
  if(pointInSprite(mouseX, mouseY, newGameText)){
    //start a new game
    newGame();
  }else{
    //Otherwise check if the game is still going
    if(!gameIsOver){
      //Check pictureA's bounds
      if(pointInSprite(mouseX, mouseY, pictureA)){
        //Pass the clicked sprite as the chosen answer
        answer(pictureA);
        
        //Check pictureB's bounds
      }else if(pointInSprite(mouseX, mouseY, pictureB)){
        //Pass the clicked sprite as the chosen answer
        answer(pictureB);
      }
    }
  }
}

//Check the given x and y to see if they are within the given sprite
function pointInSprite(x,y,sprite){
  var minX = sprite.x;
  var maxX = sprite.x+sprite.width;
  var minY = sprite.y;
  var maxY = sprite.y+sprite.height;
  
  //Check mouse position against the sprite's bounds
  if(x >= minX && x <= maxX && y >= minY && y <= maxY){
    //Point is inside the sprite's bounds
    return true;
  }
  
  //Point is outside sprite
  return false;
}
 * 
 * 
 * 
 * 
 * 
 */








/*

function button(){
	Sprite.call(this);
	
	
	this.width = 50;
	this.height = 50;
	
	this.on = false;
	
	this.im1= "http://www.jdmchicago.com/wallpaper/1920x1080-nsx2.jpg";
	this.im2 = "http://blog.caranddriver.com/wp-content/uploads/2015/02/Acura-NSX-Type-R-artists-rendering-PLACEMENT1-626x382.jpg";
	
	this.image = Textures.load(this.im1);
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.func = switchImage(this);

}
button.prototype = new Sprite();





//What happens when the mouse is down
button.onMouseDown = function(button){

    if(checkSprite(sprite, gInput.mouse.x, gInput.mouse.y)){
      console.log("brock");
      this.dragging = true;
      this.target = sprite;
      this.dragOffsetX = gInput.mouse.x-sprite.x;
      this.dragOffsetY = gInput.mouse.y-sprite.y;
      break;
    }
  }
};


gInput.addMouseDownListener(button);

//What happens when the mouse is up
button.onMouseUp = function(){
  this.dragging = false;
  this.target = undefined;
};
gInput.addMouseUpListener(manager);


button.prototype.update = function(d){
};














var switchImage = function( ob ){
	console.log('working');
	if(ob instanceof button){
		if(ob.on){
			ob.image = Textures.load(ob.im1);
			ob.on = false;
			
		}else{	
			ob.image = Textures.load(ob.im2);
			ob.on = true;
	
		}
	
	
	}
};







*/





















/* button.prototype.update = function(d){
	
	
	
	
	
	
	
	
	
	
	
var screenMan = new ScreenManager();
world.addChild(screenMan);

var mainMenu = new Screen(false, false);
screenMan.push(mainMenu);
mainMenu.image = Textures.load("http://jar42.com/brine/starter/images/logo_filled.png");

mainMenu.init = function(){
    var newGame = new TextButton("New Game");
    newGame.setLabelColors("#aaaaaa", "#00ff00", "#ff0000");
    
    this.gui.addChild(newGame);
    newGame.func = function(){
        screenMan.push(gameScreen);
    }
}

var gameScreen = new Screen(false, true);
gameScreen.init = function(){
    var sprite = new Sprite();
    sprite.image = Textures.load("http://www.jar42.com/brine/laststop/images/grass.png");
    sprite.x = 20;
    sprite.y = 20;
    this.stage.addChild(sprite);
}

var pauseMenu = new Screen(false, false);
pauseMenu.init = function(){
    var main = new TextButton("Main Menu");
    main.setLabelColors("#aaaaaa", "#00ff00", "#ff0000");
    
    this.gui.addChild(main);
    main.func = function(){
        screenMan.remove(pauseMenu);
        screenMan.remove(gameScreen);
    }
}

//Map the ESC key to launch the Pause Menu
gInput.addFunc(27, function(){
    screenMan.push(pauseMenu);
});


*/
	
	
	
	
	//if(this.mouseOver())
	
//}

