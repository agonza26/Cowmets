function MadCow(x,y,upgrades,defaultWeapon,defaultLevel,burst){
	Sprite.call(this);
	
	this.width = 35;
    this.height = 45;
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
	
	
	
	
	this.currUpgrades = new Array();
	this.currUpgrades.push(0); //ammo
	this.currUpgrades.push(0); //laser
	this.currUpgrades.push(0); //missile
	
	
	this.currUpgradesC = new Array();
	this.currUpgradesC.push(200); //ammo
	this.currUpgradesC.push(500); //laser
	this.currUpgradesC.push(350); //missile
	
	this.minedResource = 0;
	
	
	this.shootingSpeedUpgrade = 1;
	this.speedMult = 1;
	this.onComet = false;
	this.burst = burst;

    this.weaponConfig = new wepPair(defaultWeapon,defaultLevel); //base upgradeable field of madcow
    //override for current configuration of game
    this.weaponConfig = new wepPair("ammo",0);
    this.weaponIndex = 0;
    
    this.speedMult = 1;
    this.goHome = 0;
    this.home = false;
 	this.image = Textures.load("http://www.colorhexa.com/ffffff.png");
 	this.image = Textures.load("http://net.archbold.k12.oh.us/ahs/web_class/Spring_14/Holsteins_Rufenacht/images/HomePic3.png");
	this.comet = null;
    
    this.lifeTime = 0;
    this.setROF();
    
    this.aMNGR = new AmmoMNGR(this,20,45,45);
    
    this.tempPause = false;
    
    this.isColliding = false;
    this.shooting = false;
    this.shootTime = 0;
    this.defaultHealth = 200;
    this.h = new healthBar(200,0);
    
    this.justHitComet = false;
    this.justHitHome = false;
    
    
    
    this.upgraded = false;
    
    
    
    this.hit = false;
    this.hitTimer = 0;
    this.hitmark;
    
    
    
    this.truePause = false;
    this.pause = false;
    this.permaPause = false;
}
MadCow.prototype = new Sprite();

MadCow.prototype.init = function(){
	world.addChild(this);
	this.hitmark= new hitMark(this);
    //this.hitmark.hide();
};


MadCow.prototype.pauseP = function(){
	this.truePause = !this.truePause;
	this.pause = !this.pause;
	this.aMNGR.pause = this.pause;
};

MadCow.prototype.pauseFalse = function(){
	this.pause = !this.pause;
	this.aMNGR.pause = this.pause;
};





MadCow.prototype.setROF = function(){
	switch (this.weaponConfig.type){
		case "ammo":
			this.shootRate= 30;
			break;
		case "laser":
			this.shootRate = 100;
			break;
		case "missile":
			this.shootRate = 50;
			break;
		case "grenade":
			this.shootRate = 120;
			break;
		default:
			this.shootRate = 50;
			break;
	}
};

MadCow.prototype.hitting = function(){
	if(this.hit){
		this.hitTimer =0;
		this.hit=false;
		this.hitmark.unhide();
	}
	
	if(this.hitTimer<=15){
		this.hitTimer++;
	}else{
		this.hitmark.hide();
	}
	
	
};







MadCow.prototype.update = function(d){
	
	
	
	
	
	
	
	if(this.permaPause){
		
	}else{
		this.isColliding = false;
		
		this.setROF();
		
		if(this.comet!=null){
			    
			if(this.home == false){
				this.moveComet();
			}
		}
		
		
		
		
	
    
    
    
    
		
		
		
		
		
		
		
		
		
		
		
		if(!this.pause){
			this.hitting();
			this.hitmark.updateM();
			
			var dontMove = false;
			
			
			
			if(!this.home && this.comet!=null){
				dontMove = true;
			}else{
				dontMove = false;
			}	
			
			if(!dontMove){	
			   this.move();
			   this.shoot();
		    }
		
			
			//console.log(this.h.health);
			checkPOB(this,false);
			//var a =calcIndexes(this);
			this.lifeTime++;
		}
	}
	
	
	
};





MadCow.prototype.shoot = function(){
	if(!this.shooting){
		if(gInput.space){
			this.shooting = true;
		}
	}
	
	
	if(this.shooting){
		var index = 0;
		switch(this.weaponConfig.type){
			
			
			case "laser":
				index = 1;
				break;
			case "missile":
				index = 2;
				break;
		
			case "ammo":
			default:
				index = 0;

				break;
		
		}
		
		
		if(this.shootTime==0){
			 this.aMNGR.getAmmo(this.weaponConfig.type ,this.currUpgrades[index],this.x,this.y-this.height/2);
		}
		if((this.burst)&&(this.shootTime-5 ==0)){
			 this.aMNGR.getAmmo(this.weaponConfig.type ,this.currUpgrades[index],this.x,this.y-this.height/2);
		}
		
		

		if(this.shootTime<this.shootRate){
			this.shootTime++;
		}else{
			this.shooting=false;
			this.shootTime=0;
			
		}
	}
};

MadCow.prototype.switchWep = function(){
	console.log("switchWep");
	switch(this.weaponConfig.type){
		case "ammo":
			this.weaponConfig.type = "laser";
			this.weaponIndex = 1;
			this.weaponConfig.level=this.currUpgrades[1];

			break;
		case "laser":
			this.weaponConfig.type = "missile";
			this.weaponIndex = 2;
			this.weaponConfig.level=this.currUpgrades[2];
			break;
		case "missile":
		default:
			this.weaponConfig.type = "ammo";
			this.weaponIndex = 0;
			this.weaponConfig.level=this.currUpgrades[0];
			break;
	}
	
};

MadCow.prototype.upgradeThis = function(){
	this.currUpgrades[this.weaponIndex]++;
};


MadCow.prototype.upgrade = function(){
	console.log("upgrade");
	switch(this.weaponConfig.type){
		case "ammo":
		
		
			
			switch(this.currUpgrades[0]){
				
			}

			break;
			
			
		case "laser":
			switch(this.currUpgrades[1]){
				
			}
		
		
			this.weaponConfig.type = "missile";
			this.weaponConfig.level=this.currUpgrades[2];
			break;
			
			
		case "missile":
			switch(this.currUpgrades[2]){
				
			}
		
		
			this.weaponConfig.type = "ammo";
			this.weaponConfig.level=this.currUpgrades[0];
			break;
	}
};


MadCow.prototype.moveComet = function(){
	var xVel = 2.9;
	var yVel = 2.9;
	this.rot(this);
	this.x -= xVel * Math.cos(this.goHome);
	this.y -= yVel * Math.sin(this.goHome);
    if((this.y +5 >= (canvas.height-100))){
		this.home = true;
	}else{
		this.home = false;
	}
};

MadCow.prototype.rot = function(player){
	var xDist = (canvas.width/2)-this.x;
	var yDist = (canvas.height-100)-this.y;
	var angle = Math.atan2(yDist, xDist);
	this.goHome = angle + DTR(180);
	
};

MadCow.prototype.move = function(){
	var speed =1*this.speedMult;
		
			
	if(this.comet ==null){
		this.home =false;
		if(((gInput.down)&&(gInput.up))||((gInput.down2)&&(gInput.up2))){}
		else if((gInput.down)||(gInput.down2)){
			this.y += 4.5-speed;
		}else 
		if((gInput.up)||(gInput.up2)){
			this.y -= 3 +2*speed;
		}
		
	}				
	
	
	
	if((gInput.left)  && (gInput.right)){}
	else if((gInput.left)||(gInput.left2)){
		this.x -= 4-speed;
		if(this.comet !=null){
			this.comet.x -= 4-speed;
			//checkPOB(this.comet,false);
		}
	}
	else if((gInput.right)||(gInput.right2)){
		this.x += 4-speed;
		if(this.comet !=null){
			this.comet.x += 4-speed;
			//checkPOB(this.comet,false);
		}
	}	
};






function hitMark(player){

	Sprite.call(this);
    this.player = player;
    this.width = 45;
    this.height = 45;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
	
    this.x = player.x;
    this.y = player.y;
    this.alpha = 0;
    this.image = Textures.load("http://www.clker.com/cliparts/H/u/D/n/Y/2/red-ball-hi.png");
    this.ogW = this.width;
	this.ogH = this.height;
    world.addChild(this);
};







/*

function hitMark(player){
	Sprite.call(this);
	this.image = Textures.load("http://www.clker.com/cliparts/Y/r/9/l/h/Z/exclamation-point-in-blue-hi.png");
	this.width = player.width/2;
	this.width = 20;
	this.height= this.width;
	this.x = player.x;
	this.y = player.y-player.width/2-20-this.height/2;
	
	this.ogW = this.width;
	this.ogH = this.height;
	world.addChild(this);
	
}
*/
hitMark.prototype = new Sprite();

hitMark.prototype.updateM = function(){
	world.removeChild(this);
	world.addChild(this);
	this.move();
};

hitMark.prototype.move = function(){
	this.x = this.player.x-5;
	this.y = this.player.y;
};
hitMark.prototype.hide = function(){
	
	this.alpha = 0;
};
hitMark.prototype.unhide = function(){
	
	
	
};










	
					
			
			
			
			
function healthBar(max,offset){
	this.maxH = max;
	this.health = max;

	//this.b = new healthBarBottom(max*2,offset);
	//this.t = new healthBarTop(max*2,offset);
	world.addChild(this);
}

healthBar.prototype.update = function(d){
	//because at the moment I couldn't find a proper way to control the order in which things are drawn (and avoiding looking through & modifying brine.js)
	//i found that removing from the world and immediately readding sets the draw priority to being on top of previously added objects
	//will implement this with other objects later
	
	/*
	world.removeChild(this.b);
	world.removeChild(this.t);
	world.addChild(this.b);
	world.addChild(this.t);
	*/
};







healthBar.prototype.healthColor = function(){
	
	var stringBase = "http://www.colorhexa.com/";
	var cH = "ff";
	var yH = "00";
	var mH = "00.png";
	var x = Math.floor((this.health)*511/this.maxH);

	if(x==0){}
	else if(x<256){
		var yH = x.toString(16); 
		if(yH.length==1){
			yH = "0"+yH;
		}

	}else  if(x<511){
		yH = "ff";
		x -=256;
		var t = 256-x;
   		var cH = t.toString(16);
		if(cH.length==1){
			cH = "0"+cH;
		}
   		
	}else if(x==511){
		cH= "00";
		yH = "ff";
	}
	
	var neString = stringBase+cH+yH+mH;
	return neString;
};




healthBar.prototype.setH =  function(newHealth){
		
		if(newHealth <0){
			newHealth = 0;
		}
		this.health= newHealth;
		//this.t.setH(newHealth);
		//this.t.image = Textures.load(this.healthColor());	
};





healthBar.prototype.upgH = function(newHealth){
	if(newHealth <0){
		newHealth = 0;
	}
	//this.b.width=newHealth;
	//this.b.xoffset = -this.b.width;
	//this.b.x=canvas.width;
	//this.setH(newHealth);
};

	
	
	
	
	

function healthBarTop(max,offset){
	Sprite.call(this);
	this.width = max;
	this.height = 25;
	
	this.y =0+offset;
	this.xoffset = -this.width;
	this.x = canvas.width;
	this.image = Textures.load("http://www.colorhexa.com/880296.png");
	world.addChild(this);
}
healthBarTop.prototype = new Sprite();

healthBarTop.prototype.setH = function(newHealth){
	this.width= newHealth*2;
	this.xoffset = -this.width;
	this.x=canvas.width;
};

function healthBarBottom(max,offset){
	Sprite.call(this);
	this.width = max;
	this.height = 25;
	this.x = canvas.width;
	this.y = 0+offset;
	this.xoffset = -this.width;
	this.image = Textures.load("http://www.colorhexa.com/00ffff.png");
	world.addChild(this);
	
}

healthBarBottom.prototype = new Sprite();	






function wepPair(type, level){
	this.type = type;
	this.level = level;
}







