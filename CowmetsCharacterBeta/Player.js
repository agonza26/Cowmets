function MadCow(x,y,upgrades,defaultWeapon,defaultLevel,burst){
	Sprite.call(this);
	
	this.width = 35;
    this.height = 45;
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
	
	this.colIndex = calcIndexes(this);
	
	this.currUpgrades = upgrades;//will possibly be array with values representing upgrades or an object with boolean checks, once more upgrades are discussed this will be implemented
	this.shootingSpeedUpgrade = 1;
	this.speedMult = 1;
	this.onComet = false;
	this.burst = burst;

    this.weaponConfig = new wepPair(defaultWeapon,defaultLevel); //base upgradeable field of madcow
    this.speedMult = 1;
    this.goHome = 0;
    this.home = false;
 	this.image = Textures.load("http://www.colorhexa.com/ffffff.png");
 		this.image = Textures.load("http://net.archbold.k12.oh.us/ahs/web_class/Spring_14/Holsteins_Rufenacht/images/HomePic3.png");
	this.comet = null;
    
    this.lifeTime = 0;
    this.setROF();
    
    this.aMNGR = new AmmoMNGR(this,20,45,45);
    this.h = new healthBar(100,0);
    world.addChild(this);
    
    this.isColliding = false;
    this.shooting = false;
    this.shootTime = 0;
}
MadCow.prototype = new Sprite();



MadCow.prototype.pauseP = function(){
	this.pause = !this.pause;
	this.aMNGR.pause = this.pause;
};





MadCow.prototype.setROF = function(){
	switch (this.weaponConfig.type){
		case "ammo":
			this.shootRate= 30;
			break;
		case "laser":
			this.shootRate = 90;
			break;
		case "missle":
			this.shootRate = 70;
			break;
		case "grenade":
			this.shootRate = 120;
			break;
		default:
			this.shootRate = 30;
			break;
	}
};









MadCow.prototype.update = function(d){
	this.isColliding = false;
	this.setROF();
	
	if(!this.pause){			
		this.move();
		this.shoot();


		if(this.comet!=null){
		    
			if(this.home == false){
			this.moveComet();
			}
			if(gInput.x){
				this.comet=null;
			
			}
		}
		
		//checkPOB(this,false);
		//var a =calcIndexes(this);
		this.lifeTime++;
	}
	
	
	
};





MadCow.prototype.shoot = function(){
	if(!this.shooting){
		if(gInput.space){
			this.shooting = true;
		}
	}
	
	
	if(this.shooting){
		
		
		if(this.shootTime==0){
			 this.aMNGR.getAmmo(this.weaponConfig.type ,this.weaponConfig.level,this.x,this.y-this.height/2);
		}
		if((this.burst)&&(this.shootTime-5 ==0)){
			 this.aMNGR.getAmmo(this.weaponConfig.type ,this.weaponConfig.level,this.x,this.y-this.height/2);
		}
		
		

		if(this.shootTime<this.shootRate){
			this.shootTime++;
		}else{
			this.shooting=false;
			this.shootTime=0;
			
		}
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

		if((gInput.down)&&(gInput.up)){}
		else if(gInput.down){
			this.y += 4.5-speed*1.25;
		}else 
		if(gInput.up){
			this.y -= 3 +2*speed;
		}
		
	}				
	
	
	
	if((gInput.left)  && (gInput.right)  ){}
	else if(gInput.left){
		this.x -= 4-speed;
		if(this.comet !=null){
			this.comet.x -= 4-speed;
			//checkPOB(this.comet,false);
		}
	}
	else if(gInput.right){
		this.x += 4-speed;
		if(this.comet !=null){
			this.comet.x += 4-speed;
			//checkPOB(this.comet,false);
		}
	}
	
	
	
	
	
	
	
};












	
					
			
			
			
			
function healthBar(max,offset){
	this.maxH = max;
	this.health = max;

	this.b = new healthBarBottom(max*2,offset);
	this.t = new healthBarTop(max*2,offset);
	world.addChild(this);
}

healthBar.prototype.update = function(d){
	//because at the moment I couldn't find a proper way to control the order in which things are drawn (and avoiding looking through & modifying brine.js)
	//i found that removing from the world and immediately readding sets the draw priority to being on top of previously added objects
	//will implement this with other objects later
	world.removeChild(this.b);
	world.removeChild(this.t);
	world.addChild(this.b);
	world.addChild(this.t);
	
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

		this.t.setH(newHealth);
		//this.t.image = Textures.load(this.healthColor());	
};


healthBar.prototype.upgH = function(newHealth){
	if(newHealth <0){
		newHealth = 0;
	}
	this.b.width=newHealth;
	this.b.xoffset = -this.b.width;
	this.b.x=canvas.width;
	this.setH(newHealth);
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







