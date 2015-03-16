//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Rock Manager////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


function rockManager(player,auto){
	this.player = player;
	this.auto = auto;
	this.maxSize = 10;
	this.pause = false;
	this.rockArr = new List();
	this.rockImg = new Array();
	this.rockImg.push(Textures.load("http://www.colorhexa.com/c0c0c0.png")); //smallAsteroid
	world.addChild(this);
	this.rockPoints = 0;
	this.resources=0;
}




rockManager.prototype.update = function(d){
	if(!this.pause){
		if(this.auto){
			this.autoGenerate();
		}
	}
};





rockManager.prototype.autoGenerate = function(){
	 while(this.rockArr.length<this.maxSize){
		var x = 10+Math.random()*(canvas.width-20);
		var y = -20 ;
		var angle = -90+Math.random()*180;
		var decideForMe =Math.random()*100;
		
		if(decideForMe<90){
	    	this.generateSR(x,y, angle, 1, 1,false);
	   	}else{
	   		this.generateBR(x,y, angle, 1, 1,false);
	   	}
	 } 
};

rockManager.prototype.setMax = function(num){
	this.maxSize=num;
};


rockManager.prototype.switchAuto = function(){
	this.auto = !this.auto;
	return this.auto;
};


rockManager.prototype.generateSR = function(x,y, angle, healthMult, speedMult,stag){
	var t =new smallRock(x,y, angle, healthMult, speedMult, 20,45, 45,this.player,stag,this);
	gridSingleton.getInstance().list.push(t);
	this.rockArr.push(t);
};






rockManager.prototype.generateBR = function(x,y, angle, healthMult, speedMult, stag){
	var t =new bigRock(x,y, angle, healthMult, speedMult, 20,45, 45,this.player,stag,this);
	gridSingleton.getInstance().list.push(t);
	this.rockArr.push(t);
};


rockManager.prototype.generateC = function(x,y, angle, healthMult, speedMult, mineRate,d,e,r){
	
	var c = new comet(x,y, angle, healthMult, speedMult, this.player, this,mineRate,d,e,r);
};











//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////Aliens////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


//////////////////////// COMET ////////////////////
///////////////////////////////////////////////////







function comet(x,y, angle, healthMult, speedMult, player, manager,mineRate,d,e,r){
	this.manager=manager;
	this.player = player;
	this.onPlayer = false;
	this.speedMult = speedMult; //assume values 1<=speedMult; used to make them harder/easier for levels
	this.angle =angle;
	this.hO = new mineBar(mineRate,200,d,e,r);
	this.goHome = 0;
	this.home = false;
	this.mineRate = mineRate;
	
	this.justHitPlayer = false;
	this.justHitHome = false;
	this.hitPoint = 0;
	this.hitHome = 0;
	
	Sprite.call(this);
    this.width = 60;  //we can make them bigger or smaller, the actual size will be debated once we work on art
    this.height = 60;
 	//this.image = Textures.load("http://www.colorhexa.com/c000c0.png" );
 	this.image = Textures.load("http://i1104.photobucket.com/albums/h329/zorq1/Spinning-asteroid-9.gif");
	this.disengaged = false;
	this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    this.initi = false;
    this.lifeTime = 0; 
    this.health = 125*healthMult; //assume values 0.1<=healthMult<=5; used to make them harder/easier for levels
 	world.addChild(this);
};
comet.prototype = new Sprite();

comet.prototype.update = function(d){
	
	
	if(this.onPlayer){
		if(this.home == false){
	    	this.moveTo();
		}
	}
	if(!this.manager.pause){
		if(gInput.x){
			this.disengage();
		}

		if(!this.disengaged){
			
			
			
			if(!this.onPlayer){
				if(check2Ob(this,this.player)){
					this.onPlayer = true;
					this.player.onComet = true;
					this.player.comet=this;
					//this.player.pauseFalse();
				}
			}
			
	
			if(!this.onPlayer){
				this.move();
				if(check2Ob(this,this.player)){
					this.onPlayer = true;
					this.player.onComet = true;
					this.player.comet=this;
				}
			}
			
			if(this.onPlayer){
				
				if(this.home == true){
					if(this.lifeTime>this.hitHome){
						this.justHitHome=false;
					}

		            this.mine();
					this.x = this.player.x - 17;
					this.y = this.player.y;
					}
				}
			}
			this.lifeTime++;
		}if(this.disengaged){
			this.y += this.speedMult;
	        if(checkPOBn(this)){
		       world.removeChild(this);
	        }  
			
		}
	};

//finds the middle/bottom moves to and finds an angle towards it
comet.prototype.rot = function(obj){
	var xDist = (canvas.width/2)-obj.x;
	var yDist = (canvas.height-100)-obj.y;
	var angle = Math.atan2(yDist, xDist);
	this.goHome = angle + DTR(180);
	
};
//moves toward angle found toward middle/bottom
comet.prototype.moveTo = function(){
	if(!this.justHitPlayer){
		 this.player.tempPause=true;
		this.justHitPlayer = true;
		this.hitPoint = this.lifeTime;
	}
	var xVel = 3;
	var yVel = 3;
	this.rot(this);
	this.x -= xVel * Math.cos(this.goHome);
	this.y -= yVel * Math.sin(this.goHome);
	if(((this.x + 1 >= canvas.width/2) || (this.x - 1 <= canvas.width/2)) && (this.y + 1 >= (canvas.height - 100))){
		this.home = true;
		this.player.tempPause=false;
		this.hitHome = this.lifeTime;
		this.justHitHome = true;
		
	}
	
};

comet.prototype.move= function(){
	this.x += 2*this.speedMult*Math.sin(DTR(this.angle));
	this.y += 2*this.speedMult*Math.cos(DTR(this.angle));
	
	if(checkPOBn(this)){
		world.removeChild(this);
	}  

};





comet.prototype.mine = function(){
	if(!this.initi){
		this.hO.init();
		this.initi = true;
	}
	
	
	//decides how quickly the bar should move
	 var fractOfRate = 2;
	 if(this.mineRate<15){
	 	fractOfRate = 1;
	 }else if(this.mineRate>100){
	 	fractOfRate = 4;
	 }



	

	//if proper time to update bar
	// if(  this.lifeTime %  Math.floor(this.mineRate*30/fractOfRate) ==0){
	 	
	 	
	 	var decideForMe = Math.random()*100;
	 	var currProgress = this.hO.progress/this.hO.max;
	 	
	 	var dP = 1-this.hO.D.width/this.hO.max;
	 	var eP = 1-this.hO.E.width/this.hO.max;
	 	var rP = 1-this.hO.R.width/this.hO.max;
	 	console.log("dP" + dP + "eP" + eP +"rP" +rP);
	 	
	 	
	 	
	 	var caseP=-1;
	 	
	 	
	 	if(currProgress<rP){
	 		
	 		caseP=0;
	 	}else if(currProgress<eP){
	 		
	 		caseP=1;
	 	}else if(currProgress<.99){
	 		
	 		caseP=2;
	 	}else{
	 		//console.log("default explode");
	 		this.explode();
	 		return;
	 	}
	 	
	 
	 	
	 	switch(caseP){
	 		case 0: //safe zone
	 			if(decideForMe<40){
		 			this.giveResource();
		 		}else{
		 			//nothing
		 		}
	 			break;
	 		
	 		case 1: //bonus zone
	 			if(decideForMe<60){
		 			this.giveResource();
		 		}else if(decideForMe<65){
		 			this.explode();
		 		}else{
		 			//nothing
		 		}
	 			break;
	 		case 2://danger zone
	 			if(decideForMe<90){
		 			this.giveResource();
		 		}else {
		 			this.explode();
		 		}
	 			break;
	 		case -1://bug somehow, but just in case
	 		default:
	 			break;	 		
	 	}	 	
	 //} 
};








 comet.prototype.giveResource = function(){

		this.manager.resources+= 5;
 };

comet.prototype.disengage = function(){
	if(this.hO.progress>this.hO.r*200){
		this.disengaged = true;
		this.player.comet= null;
		this.player.h.setH(this.player.h.health+2);
		
		
	}
	
	
	
	
	
};


comet.prototype.explode = function(){
	
	this.onPlayer = false;
	this.player.onComet = false;
	this.player.comet = null;
	this.player.home = false;
	
	
	
	console.log("explode");
	this.player.h.setH(this.player.h.health-30);
	this.disengaged = true;
	this.hO.deleteThis();
	var t =  new explosionObject(this.x,this.y);
	
};














///////////////// COMET'S MINE BAR ////////////////
///////////////////////////////////////////////////
function mineBar(mineRate,max,d,e,r){
	if(e+d+r!= 1){
		console.log("incorrect usage of d,e,r, must be values 0<=n<=1 & sum=1");
		return false;
	}
	this.mineRate = mineRate;
	this.progress = 0;
	this.max = max;
	this.d = d;
	this.e = e;
	this.r = r;
	this.lifeTime = 0;
	this.health = 100;
	
	
	this.D = new mineBarD(max,d,e,r);
	this.E = new mineBarE(max,d,e,r);
	this.R = new mineBarR(max,d,e,r);
	this.C = new mineBarC(max);
	
}

mineBar.prototype.deleteThis = function(){
	world.removeChild(this);
	world.removeChild(this.D);
	world.removeChild(this.E);
	world.removeChild(this.R);
	world.removeChild(this.C);
	
};




mineBar.prototype.init = function(){
	this.D.init();
	this.E.init();
	this.R.init();
	this.C.init();
	world.addChild(this);
	
};

mineBar.prototype.update = function(d){
	this.mine();
	this.adjust();
	if(this.lifeTime==300){
		this.health=49;
	}
};


mineBar.prototype.mine =  function(){
	
		if(this.progress>=this.max){
			this.lifeTime++;
			return true;
		}else{
			if(this.lifeTime%this.mineRate ==0){
				this.progress++;
				this.C.x--;
				this.C.width++;
			}
		}
		this.lifeTime++;
		return false;
};


mineBar.prototype.adjust = function(){
		if(this.health==0){
			return true;
		}
		if(this.health<50){
			this.D.width= this.max*this.d +   this.max*this.e*   ((50-this.health)/50 )         ;
		}
		return false;
};




function mineBarD(max,d,e,r){
	Sprite.call(this);
	this.width = max*d;
	this.height = 20;
	this.yoffset = -this.height;
	this.x = 20;
	this.y = canvas.height-10;
	
	this.image = Textures.load("http://www.colorhexa.com/ff0000.png");
	
}
mineBarD.prototype = new Sprite();
mineBarD.prototype.init = function(){
	world.addChild(this);
};




function mineBarE(max,d,e,r){
	Sprite.call(this);
	this.width = max*e;
	this.height = 20;
	this.yoffset = -this.height;
	this.x = 20+max*d;
	this.y = canvas.height-10;
	
	this.image = Textures.load("http://www.colorhexa.com/f7ff00.png");
	
	
}
mineBarE.prototype = new Sprite();
mineBarE.prototype.init = function(){
	world.addChild(this);
};




function mineBarR(max,d,e,r){
	Sprite.call(this);
	this.width = max*r;
	this.height = 20;
	this.yoffset = -this.height;
	this.x = 20+max*d+max*e;
	this.y = canvas.height-10;
	
	this.image = Textures.load("http://www.colorhexa.com/00e390.png");
	
	
}
mineBarR.prototype = new Sprite();
mineBarR.prototype.init = function(){
	world.addChild(this);
};


function mineBarC(max){
	Sprite.call(this);
	this.width = 0;
	this.height = 10;
	this.yoffset = -this.height;
	this.x = 20+max;
	this.y = canvas.height-10;
	
	this.image = Textures.load("http://www.colorhexa.com/0392a3.png");
}
mineBarC.prototype = new Sprite();
mineBarC.prototype.init = function(){
	world.addChild(this);
};





function explosionObject(x,y){
	this.xoffset = -50;
	this.yoffset =  -50;
	Sprite.call(this);
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = 100;
	this.image = Textures.load("http://th07.deviantart.net/fs71/PRE/i/2013/060/8/8/explosion_test_by_gamekiller48-d5wlzqk.png");
	this.lifetime = 0;
	world.addChild(this);
	
}

explosionObject.prototype = new Sprite();



explosionObject.prototype.update = function(d){
	if(this.lifetime++>60){
		world.removeChild(this);
	}
};




///////////////////////////////////////////////////////////////////////
//////////////////////////////Small Rock///////////////////////////////
///////////////////////////////////////////////////////////////////////


function smallRock(x,y, angle, healthMult, speedMult, cellSize,numCelli, numCellj,player, stag,manager){
	this.manager=manager;
	
	
	this.player = player;
	this.stag = stag;
	Sprite.call(this);
	this.speedMult = speedMult; //assume values 1<=speedMult; used to make them harder/easier for levels
    this.width = 50;  //we can make them bigger or smaller, the actual size will be debated once we work on art
    this.height = 50;
    
    this.isColliding = false;

 	this.image = Textures.load("http://images.clipartpanda.com/asteroid-clipart-PngMedium-moon-15892.png" );
	this.angle =angle;
 	
	this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    this.worm;
	
	var t = Math.random()*100;
	if (t < 20){   //0% chance to spawn, worm doesnt function correctly
		this.worm = new worm(x,y, angle, healthMult, speedMult, 20, 45, 45, this.manager.player, this.manager, this);
		this.worm.onRock = true;
		
	}else{
		this.worm = null;
	}
    
    
    
    
   	this.points = 80;
    this.lifeTime; //used to show how long an object has been alive, and used so that after certain intervals activate something, 
    				//ie, if(this.lifetime % "interval of time"  == 0){ doSOmething} 
    this.health = 125*healthMult; //assume values 0.1<=healthMult<=5; used to make them harder/easier for levels
 	world.addChild(this);
};
smallRock.prototype = new Sprite();


smallRock.prototype.givePoints = function(mult){
	this.manager.rockPoints += this.points*mult ; 
};


//for the moment, we will be using the smallRock's update function to show proof of concept,
//so in here, you will call your move functions, call your out of bounds check
//and your shoot methods
//we will worry about implementing a "delete" later
smallRock.prototype.update = function(d){
	if(!this.manager.pause){
		if(!this.isColliding){
			this.move();
			this.lifeTime++;
		}else{
			if(this.worm!= null){
				this.worm.onRock = false;
			}
			this.deleteThis();
			
		}
	}
};







//let this function control how it should move, not if its going to be out of bounds
smallRock.prototype.move= function(){
	if(!this.stag){
		this.x += 2*this.speedMult*Math.sin(DTR(this.angle));
		this.y += 2*this.speedMult*Math.cos(DTR(this.angle));
		
		if(checkPOBn(this)){
			this.deleteThis();
			if(this.worm!= null){
				this.worm.onRock = false;
			}
		}
		
		if(check2Ob(this,this.player)){
			if(this.worm!= null){
				this.worm.onRock = false;
			}
			this.deleteThis();
			this.player.hit = true;
			this.player.h. setH (this.player.h.health-10);
		}  
		
		
	
	
	
	
	}
	for(var i = 0; i< this.player.aMNGR.ammoArr.length;i++){
		if(check2Ob(this,this.player.aMNGR.ammoArr[i])){
			this.health-=damageCalc(this,this.player.aMNGR.ammoArr[i]);
			if(this.health<=0){
				this.givePoints(1);
				this.deleteThis();
				if(this.worm!= null){
					this.worm.onRock = false;
				}
				break;
			}
			
			this.player.aMNGR.ammoArr[i].deleteThis();
			
			
		}
	}
	
	
	
	
	
	
};







smallRock.prototype.deleteThis = function(){
	this.manager.rockArr.remove(this);
	world.removeChild(this);
};




///////////////////////////////////////////////////////////////////////
///////////////////////////////Big Rock////////////////////////////////
///////////////////////////////////////////////////////////////////////


function bigRock(x,y, angle, healthMult, speedMult, cellSize,numCelli, numCellj,player,stag,manager){
	this.manager=manager;
	this.player = player;
	this.isColliding = false;
	this.stag = stag;
	Sprite.call(this);
	this.speedMult = speedMult; //assume values 1<=speedMult; used to make them harder/easier for levels
    this.width = 200;  //we can make them bigger or smaller, the actual size will be debated once we work on art
    this.height = 200;
    
    this.points = 200;

 	this.image = Textures.load("http://www.colorhexa.com/c0c0c0.png" );	
 	
 	this.cell_size = cellSize; //used later in grid checks, just leave here for now
 	this.maxI = numCelli;
	this.maxJ = numCellj;
	this.angle =angle;
 	
	this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;

    this.lifeTime = 0; //used to show how long an object has been alive, and used so that after certain intervals activate something, 
    				//ie, if(this.lifetime % "interval of time"  == 0){ doSOmething} 
    this.health = 200*healthMult; //assume values 0.1<=healthMult<=5; used to make them harder/easier for levels
 	world.addChild(this);
};
bigRock.prototype = new Sprite();


bigRock.prototype.givePoints = function(mult){
	this.manager.rockPoints += this.points*mult ; 
};

bigRock.prototype.update = function(d){
	if(!this.manager.pause){
		if(!this.isColliding){
			if(!this.stag){
				this.move();
			}else{
			
			}
			this.lifeTime++;
		}else{
			this.explosion();
			this.deleteThis();
			console.log("dead just not dead");
		}
	}
};


bigRock.prototype.move= function(){
	if(!this.stag){
		this.x += .5*this.speedMult*Math.sin(DTR(this.angle));
		this.y += .5*this.speedMult*Math.cos(DTR(this.angle));
		
		if(checkPOBn(this)){
			this.deleteThis();
		
		}
		
		if(check2Ob(this,this.player)){
			this.deleteThis();
			this.player.hit = true;
			this.player.h.       setH      (this.player.h.health-15);
		}

	} 
	
	for(var i = 0; i< this.player.aMNGR.ammoArr.length;i++){
		if(check2Ob(this,this.player.aMNGR.ammoArr[i])){
			this.health-=damageCalc(this,this.player.aMNGR.ammoArr[i]);
			if(this.health<=0){
				this.givePoints(1);
				this.deleteThis();
				break;
			}
			
			this.player.aMNGR.ammoArr[i].deleteThis();
			
			
		}
	}
	  
};


bigRock.prototype.explosion = function(){
	
	var t = Math.floor(Math.random()*5 +1);
	for( var j = 0; j < t ; ++j){
		var angle = Math.random()*360;
		var xMod = Math.sin(DTR(angle))*this.width/2;
		var yMod = Math.cos(DTR(angle))*this.height/2;
		this.manager.generateSR(this.x+xMod,this.y+yMod, angle, 0.5, 1,false);

	}
};


bigRock.prototype.deleteThis = function(){
	this.manager.rockArr.remove(this);
	world.removeChild(this);
};




///////////////////////////////////////////////////////////////////////
/////////////////////////////////Worm//////////////////////////////////
///////////////////////////////////////////////////////////////////////



function worm(x,y, angle, healthMult, speedMult, cellSize,numCelli, numCellj, player, manager, rock){
	this.target = null;
	Sprite.call(this);
	this.angle = angle;
	this.manager = manager;
	this.speedMult = speedMult; //assume values 1<=speedMult; used to make them harder/easier for levels
    this.width = 30;  //we can make them bigger or smaller, the actual size will be debated once we work on art
    this.height = 30;

 	this.image = Textures.load("http://www.colorhexa.com/00ff00.png" ); //green
 	
	this.points = 100;
    this.player = player;
    this.rock = rock;
 	this.onRock = true;
 	
 	this.cell_size = cellSize; //used later in grid checks, just leave here for now
 	this.maxI = numCelli;
	this.maxJ = numCellj;

 	
	this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    this.lifeTime=0; //used to show how long an object has been alive, and used so that after certain intervals activate something, 
    				//ie, if(this.lifetime % "interval of time"  == 0){ doSOmething} 
    this.health = 100*healthMult; //assume values 0.1<=healthMult<=5; used to make them harder/easier for levels
    
 	world.addChild(this);
	
};
worm.prototype = new Sprite();




//constantly rotating, and firing at player.
worm.prototype.rot = function(player){
	var xDist = this.x-player.x;
	var yDist = this.y-player.y;
	var angle = Math.atan2(yDist, xDist);
	this.angle = angle;
	this.rotation = angle + DTR(180);
	
};

worm.prototype.shoot = function(){
	var tempWs = new wAmmo(this.x, this.y, this.angle);
	
};

worm.prototype.deleteThis = function(){
	//this.manager.rockArr.remove(this);
	world.removeChild(this);
};

smallRock.prototype.givePoints = function(mult){
	this.manager.rockPoints += this.points*mult ; 
};



/*checks to see if it is on a rock
if yes rotate and shoots at the player
if the rock gets destroyed then the worm follows
the player and shoots at it
*/
worm.prototype.update = function(){
	if(this.onRock == true){
		
		this.x = this.rock.x+this.rock.width/2;
		this.y = this.rock.y+this.rock.height/2;
		this.checkCol();
		this.rot(this.player);
		if(this.lifeTime % 50 == 0){
			this.shoot();
		}
	}else{
		this.moveTo(this.player); //change this to fly elsewhere
		this.checkCol();
		if(this.lifeTime % 150 == 0){
			console.log("moving towards player");
			this.shoot();
			//this.move(this.x + 20, this.y+20);
		}
	}

	this.lifeTime++;
	
	
};



worm.prototype.checkCol = function(){
	if(checkPOBn(this)){
			this.deleteThis();
		
		}
		
		if(check2Ob(this,this.player)){
			this.deleteThis();
			this.player.hit = true;
			this.player.h.       setH      (this.player.h.health-15);
		}

	
	
	for(var i = 0; i< this.player.aMNGR.ammoArr.length;i++){
		if(check2Ob(this,this.player.aMNGR.ammoArr[i])){
			this.health-=damageCalc(this,this.player.aMNGR.ammoArr[i]);
			if(this.health<=0){
				this.givePoints(1);
				this.deleteThis();
				break;
			}
			
			this.player.aMNGR.ammoArr[i].deleteThis();
			
			
		}
	}
};

//takes in an object(rock) allows it to move around
worm.prototype.move = function(x,y){
	this.x = x;
	this.y = y;
};

//goes towards an object at a certain velocity, not instant 
//on rock, calls this.rot(this.player)
worm.prototype.moveTo = function(obj){
	this.rot(obj);
	
	this.x -= 1.5 * Math.cos(this.angle);
	this.y -= 1.5* Math.sin(this.angle);
	
};


function wAmmo(x,y,angle){
	

	
	
	this.switchDir = false;
	this.defaultAngle = angle + DTR(180);
	
	Sprite.call(this);

    this.width = 17.5/3;
    this.height = 22.5/3;
    
    this.angle = angle;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    

    this.image = Textures.load("http://www.colorhexa.com/00ffff.png");
    
    world.addChild(this);
};

wAmmo.prototype = new Sprite();

 

wAmmo.prototype.update = function(d){
	
		var xVel=4;
		var yVel=4;
		
		
		//this.x += xVel * Math.cos(90);
		//this.y += yVel * Math.sin(90);
		//this.x += xVel * Math.cos(this.defaultAngle+90);
		//this.y += yVel * Math.sin(this.defaultAngle+90);
		//this.x += xVel * Math.cos(DTR(this.defaultAngle));
		//this.y += yVel * Math.sin(DTR(this.defaultAngle));
		this.x += xVel * Math.cos(this.defaultAngle);
		this.y += yVel * Math.sin(this.defaultAngle);
		
		
		
		
		
		if(checkPOBn(this)){
			world.removeChild(this);
		}
};
	
