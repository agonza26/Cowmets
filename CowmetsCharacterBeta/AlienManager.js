//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Alien Manager////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


function alienManager(player,auto){
	
	this.pause = false;
	this.player = player;
	this.auto = auto;
	this.maxSize = 10;
	this.alienArr = new List();
	world.addChild(this);
	this.alienPoints = 0;
}



alienManager.prototype.update = function(d){
	if(this.auto){
		this.autoGenerate();
	}
};



alienManager.prototype.autoGenerate = function(){
	 while(this.alienArr.length<this.maxSize){
		var x = 10+Math.random()*(canvas.width-20);
		var y = -20 ;
		
		
		var decideForMe =Math.random()*100;
		if(decideForMe<90){
			var follow = Math.random()*canvas.width/2;
			this.createF( x,y,follow);
	   	}else{
	   		this.createS(x,y,[0,0,0,0, 90,0,0,0],30);
	   	}
	 }
};


alienManager.prototype.createF = function(x,y,dist){

	var t = new follower(x,y, 2, 2, 20,45, 45, this.player,this,dist);
	
	gridSingleton.getInstance().list.push(t);
	this.alienArr.push(t);
};


alienManager.prototype.createS = function(x,y,path,pathSpeed){

	var t =new spammer(x,y,1, 1, 20, 45, 45,path,pathSpeed,this,this.player);
	
	this.alienArr.push(t);
	
	gridSingleton.getInstance().list.push(t);
};




//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////Aliens////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


/////////////////////// FOLLOWER ///////////////////
///////////////////////////////////////////////////

function follower(x,y, healthMult, speedMult, cellSize,numCelli, numCellj, player, manager,dist){
	
	this.isColliding = false;
	this.manager = manager;
	Sprite.call(this);
	this.speedMult = speedMult; //assume values 1<=speedMult; used to make them harder/easier for levels
    this.width = 30;  //we can make them bigger or smaller, the actual size will be debated once we work on art
    this.height = 30;
 	this.image = Textures.load("https://38.media.tumblr.com/a12a3b9ea577c2b5b1e88fdc19429208/tumblr_mps2wtIgpe1rni86yo1_500.gif" );
    this.player = player;
 	this.follow = false;
 	this.followdist = dist;

	this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    this.jesusRoom = 20; //default buffer between player and follower
    this.points = 200;
    this.lifeTime=0; //used to show how long an object has been alive, and used so that after certain intervals activate something, 
    				//ie, if(this.lifetime % "interval of time"  == 0){ doSOmething} 
    this.health = 180*healthMult; //assume values 0.1<=healthMult<=5; used to make them harder/easier for levels
 	world.addChild(this);
};

follower.prototype = new Sprite();



follower.prototype.update = function(d){
	
	
	
	if(!this.manager.pause){
		if(!this.isColliding){
			this.move();
			if(this.lifeTime%30 ==0){
				//console.log("shooting");
				this.shoot();
			}
			
			this.lifeTime++;
		}else{
			this.deleteThis();
		}
	}
};




follower.prototype.move= function(){
	var speed = 2;
	
	if((this.x-17.5/6  >  this.player.x-this.player.width/2) && (this.x+17.5/6<this.player.x+this.player.width/2)){
		//console.log("in sweetspot, dont move");
	}else{
		if(this.x-17.5/6  < this.player.x-this.player.width/2) {
			this.x+= speed;
		}else if(this.x+17.5/6  >  this.player.x+this.player.width/2){
			this.x-= speed;
		}
	}
	

	if(this.y+this.height/2+this.followdist+this.jesusRoom>= this.player.y-this.player.height/2){
		this.follow = true;
	}
	

	if(!this.follow){
		var dist = (this.player.y-this.player.height/2)-(this.y+this.jesusRoom+this.followdist+this.height/2);
		if(dist<speed){
			speed=dist;
			this.follow=true;
		}
		this.y+= speed;
	}else{
		this.y=this.player.y-this.player.height/2-this.followdist-this.jesusRoom-this.width/2;
	}
	
	
	
	
	for(var i = 0; i< this.player.aMNGR.ammoArr.length;i++){
		if(check2Ob(this,this.player.aMNGR.ammoArr[i])){
			this.health-=damageCalc(this,this.player.aMNGR.ammoArr[i]);
			if(this.health<=0){
					this.givePoints(1);
					this.deleteThis();
					break;
			}
			if(!(this.player.aMNGR.ammoArr[i] instanceof mcLaser )){
				this.player.aMNGR.ammoArr[i].deleteThis();
			}
			
		}
	}

	
	
};


follower.prototype.shoot = function(){
	var tempS = new fAmmo(this.x, this.y + this.height/2,this.player);
};


follower.prototype.deleteThis = function(){
	
	this.manager.alienArr.remove(this);
	world.removeChild(this);
};




//assume typically values between 0-2 (includes decimals, ie, 0.5, 1.25, 1)
follower.prototype.givePoints = function(mult){
	this.manager.alienPoints += this.points*mult ; 
};











/////////////////////// SPAMMER ///////////////////
///////////////////////////////////////////////////


function spammer(x,y, healthMult, speedMult, cellSize, numCelli, numCellj,path,pathSpeed,manager,player){
	

	this.manager = manager;
	this.isColliding = false;
	
	this.player = player;
	Sprite.call(this);
	this.angle = 0;
	this.path = path;
	this.currI = 0;
	this.pS = pathSpeed;
	this.speedMult = speedMult; //assume values 1<=speedMult; used to make them harder/easier for levels
    this.width = 30;  //we can make them bigger or smaller, the actual size will be debated once we work on art
    this.height = 30;

 	//this.image = Textures.load("http://www.colorhexa.com/3f6616.png");  
 	this.image = Textures.load("http://www.clipartbest.com/cliparts/dcr/en6/dcren6poi.png");
	

 	this.points = 50;
	this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x + 15;
    this.y = y + 15;
    
   
    
    this.lifeTime = 0; //used to show how long an object has been alive, and used so that after certain intervals activate something, 
    				//ie, if(this.lifetime % "interval of time"  == 0){ doSOmething} 
    this.health = 100 * healthMult; //assume values 0.1<=healthMult<=5; used to make them harder/easier for levels
 	world.addChild(this);
};
spammer.prototype = new Sprite();



spammer.prototype.update = function(d){
	
	if(!this.manager.pause){
		if(!this.isColliding&&this.health>0){
			this.move();
			if(this.lifeTime%40 ==0){
				this.shoot();
			}
			
			this.lifeTime++;
		}else{
			this.deleteThis();
			this.givePoints(1);
			
		}
	}

};











spammer.prototype.deleteThis = function(){
	this.manager.alienArr.remove(this);
	world.removeChild(this);
};

//assume typically values between 0-2 (includes decimals, ie, 0.5, 1.25, 1)
spammer.prototype.givePoints = function(mult){
	this.manager.alienPoints += this.points*mult ; 
};




spammer.prototype.move = function(){
		if(this.lifeTime % this.pS == 0){
			this.angle += this.path[this.currI];
			if(this.currI + 1 >= this.path.length){
				this.currI = 0;
			}else {
				this.currI++;
			}
		}	
		
		this.x += 3*this.speedMult*Math.sin(DTR(this.angle));
		this.y += 3*this.speedMult*Math.cos(DTR(this.angle));
		
		
		if(checkPOBn(this)){
			this.deleteThis();
		}
		if(check2Ob(this,this.player)){
			this.deleteThis();
			this.givePoints(0.5);
			this.player.hit = true;
			this.player.h. setH (this.player.h.health-5);
		}
		
		
		
		for(var i = 0; i< this.player.aMNGR.ammoArr.length;i++){
			if(check2Ob(this,this.player.aMNGR.ammoArr[i])){
				this.health-=damageCalc(this,this.player.aMNGR.ammoArr[i]);
				if(this.health<=0){
					this.givePoints(1);
					this.deleteThis();
					break;
				}
				
				if(!(this.player.aMNGR.ammoArr[i] instanceof mcLaser )){
					
					this.player.aMNGR.ammoArr[i].deleteThis();
				}
				
			}
		}

};


spammer.prototype.shoot = function(){
	//if(this.lifetime % 0 == 0){
		var temp_ammo = new spAmmo(this.x + this.width / 2, this.y,this.player);
	//}
};





//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////Alien Ammo////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////



/////////////////////// FOLLOWER ///////////////////
///////////////////////////////////////////////////


//these are similar to the ammo objects im using for the player at the moment and you can use them for now as proof of concept that your object shoots
function fAmmo(x,y,player){
	this.player = player;
	this.angle = 0;//dont worry about this for now yasha, this will be incoporated later
	Sprite.call(this);

    this.width = 17.5/3;
    this.height = 22.5/3;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    this.image = Textures.load("http://www.colorhexa.com/0f8921.png");
    
    world.addChild(this);
};

fAmmo.prototype = new Sprite();


fAmmo.prototype.update = function(d){
	if(!this.player.pause){
		if(check2Ob(this,this.player)){
			this.player.hit = true;
			this.player.h.setH(this.player.h.health-1);
			world.removeChild(this);
		}
		if(checkPOBn(this,this.player)){
			
			world.removeChild(this);
		}
		
		this.y += 5; //moves downward at a certain speed 
		
		if(check2Ob(this,this.player)){
			this.player.hit = true;
			this.player.h.setH(this.player.h.health-1);
			world.removeChild(this);
		}
		if(checkPOBn(this,this.player)){
			
			world.removeChild(this);
		}
	}
};






/////////////////////// SPAMMER ///////////////////
///////////////////////////////////////////////////



//these are similar to the ammo objects im using for the player at the moment and you can use them for now as proof of concept that your object shoots
function spAmmo(x,y,player){
	this.player = player;
	this.angle = 0;//dont worry about this for now yasha, this will be incoporated later
	Sprite.call(this);

    this.width = 17.5/3;
    this.height = 22.5/3;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    this.image = Textures.load("http://www.colorhexa.com/0f8921.png");
    
    world.addChild(this);
};

spAmmo.prototype = new Sprite();


spAmmo.prototype.update = function(d){
	if(!this.player.pause){
		if(check2Ob(this,this.player)){
				this.player.hit = true;
				this.player.h.setH(this.player.h.health-1);
				world.removeChild(this);
			}
			if(checkPOBn(this,this.player)){
				
				world.removeChild(this);
			}

			this.y += 4; //moves downward at a certain speed 
			
			
			
			if(check2Ob(this,this.player)){
				this.player.hit = true;
				this.player.h.setH(this.player.h.health-1);
				world.removeChild(this);
			}
			if(checkPOBn(this,this.player)){
				
				world.removeChild(this);
			}
	}
};
	

	

