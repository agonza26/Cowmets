function PowerUpManager(player){
	this.player = player;
	world.addChild(this);
}



















PowerUpManager.prototype.createPowerup = function(){
	var pw = new powerUp(this.player.x,this.player.y-1000,"weapon","missile",2,"http://www.clker.com/cliparts/3/7/6/d/1256186461796715642question-mark-icon.svg.hi.png",this.player);
	var t1 = new powerUp(this.player.x+100,this.player.y-3500,"weapon","laser",1,"http://www.clker.com/cliparts/3/7/6/d/1256186461796715642question-mark-icon.svg.hi.png",this.player);
	var pw3 = new powerUp(this.player.x-100,this.player.y-5500,"weapon","ammo",4,"http://www.clker.com/cliparts/3/7/6/d/1256186461796715642question-mark-icon.svg.hi.png",this.player);
	
	
	
};







PowerUpManager.prototype.createPowerup1 = function(){
	var pw = new powerUp(this.player.x,this.player.y-1000,"weapon","laser",2,"http://www.clker.com/cliparts/3/7/6/d/1256186461796715642question-mark-icon.svg.hi.png",this.player);
};





PowerUpManager.prototype.createPowerup2 = function(){

	
	
	
	var t1 = new powerUp(this.player.x+100,this.player.y-1000,"weapon","missile",1,"http://www.clker.com/cliparts/3/7/6/d/1256186461796715642question-mark-icon.svg.hi.png",this.player);

	
	
	
};



PowerUpManager.prototype.createPowerup3 = function(){
	var pw = new powerUp(this.player.x,this.player.y-1000,"weapon","ammo",2,"http://www.clker.com/cliparts/3/7/6/d/1256186461796715642question-mark-icon.svg.hi.png",this.player);

	
	
	
};



PowerUpManager.prototype.createPowerup4 = function(x,y,type,category,level,url){
	var pw = new powerUp(this.player.x,this.player.y-1000,"weapon",category,level,"http://www.clker.com/cliparts/3/7/6/d/1256186461796715642question-mark-icon.svg.hi.png",this.player);

	
	
	
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
	
	this.affects = affects;
	switch(affects){
		case "speed":
		case "health":
			this.reward = level;
			this.image = Textures.load("http://www.graphicsfuel.com/wp-content/uploads/2012/05/first-aid-kit-white-icon-512x512.png");
			break;
		
		case "weapon":
		case "weapons":
		default:
			
			
			switch(type){
				case "missile":
					this.image = Textures.load("http://www.colorhexa.com/00ff0000.png");
					break;
				case "laser":
					this.image = Textures.load("http://www.colorhexa.com/00ff00.png");
					break;
				case "ammo":
					this.image= Textures.load("http://www.colorhexa.com/00ffff.png");
					break;
				default:
					this.image= Textures.load(url);
					break;
			}
			
			
			
			this.reward = new wepPair(type, level);
			break;
	}
	
	
	world.addChild(this);
	
}




powerUp.prototype = new Sprite();

powerUp.prototype.upgradeWeapon = function(){
	
	
	
	switch(this.reward.type){
		
		case("laser"):
			
			+this.p.currUpgrades[0];
		case("missle"):
			
			++this.p.currUpgrades[1];
		case("ammo"):
		default:
			++this.p.currUpgrades[2];
			break;
	}
		
		
	world.removeChild(this);
};



powerUp.prototype.upgradeHealth = function(){
	
	this.player.h.setH(this.player.h.health+75);
		
	world.removeChild(this);
};



powerUp.prototype.onCollision = function(){
	switch(this.affects){
		case "speed":
			this.p.speedMult = this.reward;
		case "health":
			this.upgradeHealth();
			break;
		
		case "weapon":
		case "weapons":
		default:
			this.upgradeWeapon();
			break;
	}
};







powerUp.prototype.update = function(d){
	if(!this.p.pause){
		this.move();
		this.checkPlayer();
	}
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
	this.y+=12;
};














	
	
	

