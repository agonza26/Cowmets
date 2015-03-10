function PowerUpManager(player){
	this.player = player;

	
	world.addChild(this);
}



















PowerUpManager.prototype.createPowerup = function(){
	var pw = new powerUp(this.player.x,this.player.y-1000,"weapon","missile",2,"http://www.colorhexa.com/ff0000.png",this.player);
	
	
	
	var t1 = new powerUp(this.player.x+100,this.player.y-3500,"weapon","laser",1,"http://www.colorhexa.com/00ff00.png",this.player);
	var pw3 = new powerUp(this.player.x-100,this.player.y-5500,"weapon","ammo",4,"http://www.colorhexa.com/00ffff.png",this.player);
	
	
	
};



PowerUpManager.prototype.createPowerup = function(x,y,type,category,level,url){
	var pw = new powerUp(this.player.x,this.player.y-1000,"weapon",category,level,"http://www.colorhexa.com/ff0000.png",this.player);

	
	
	
};









function powerUp(x,y,affects, type,level,url,player){
	this.p = player;
	Sprite.call(this);
	this.width = 26;
	this.height = 20;
	this.xOffset = -this.width/2;
	this.yOffset = -this.height/2;
	
	
	this.x=x;
	this.y=y;
	this.z=0;
	this.image= Textures.load(url);
	this.affects = affects;
	switch(affects){
		case "speed":
		case "health":
			this.reward = level;
			break;
		
		case "weapon":
		case "weapons":
		default:
			this.reward = new wepPair(type, level);
			break;
	}
	
	world.addChild(this);
	
}




powerUp.prototype = new Sprite();

powerUp.prototype.upgradeWeapon = function(){
	if(this.p.weaponConfig.type==this.reward.type){
		if(this.p.weaponConfig.level>=this.reward.level){
			this.p.weaponConfig.level++;
		}else{
			this.p.weaponConfig.level = this.reward.level;
		}
	}else{
		this.p.weaponConfig.type = this.reward.type;
		this.p.weaponConfig.level = this.reward.level;
	}
	world.removeChild(this);
};



powerUp.prototype.onCollision = function(){
	switch(this.affects){
		case "speed":
			this.p.speedMult = this.reward;
		case "health":
			this.p.health+= this.reward;
			break;
		
		case "weapon":
		case "weapons":
		default:
			this.upgradeWeapon();
			break;
	}
};







powerUp.prototype.update = function(d){
	this.move();
	this.checkPlayer();
};


powerUp.prototype.checkPlayer = function(){
	var minX = this.p.x - this.p.width/2;
    var maxX = this.p.x + this.p.width/2;
    var minY = this.p.y - this.p.height/2;
    var maxY = this.p.y + this.p.height/2;

    var minX2 = this.x - this.width/2;
    var maxX2 = this.x + this.width/2;
    var minY2 = this.y - this.height/2;
    var maxY2 = this.y + this.height/2;


    if (maxX2 >= minX && minX2 <= maxX && maxY2 >= minY && minY2 <= maxY) {
        this.onCollision();
    }
};

powerUp.prototype.move = function(){
	this.y+=4;
	
};

















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

