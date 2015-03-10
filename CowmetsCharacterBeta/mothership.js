function bossManager(player){
	this.player = player;
	world.addChild(this);
};

bossManager.prototype.generateM = function(x,y, healthMult, speedMult){
	var mom = new mothership(x,y, healthMult, speedMult, this.player, this);
};



function mothership(x,y, healthMult, speedMult, player, manager){
	
	this.manager = manager;
	Sprite.call(this);
	this.speedMult = speedMult; //assume values 1<=speedMult; used to make them harder/easier for levels
	this.healthMult = healthMult;
    this.width = 450;  //we can make them bigger or smaller, the actual size will be debated once we work on art
    this.height = 150;
 	this.image = Textures.load("http://www.clker.com/cliparts/x/p/Z/F/y/c/space-invaders-hi.png" ); //red
 	this.forward = true;

    this.player = player;
	this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    var lAngle = this.lRot(this.player);
    var rAngle = this.rRot(this.player);
    this.lifeTime=0; //used to show how long an object has been alive, and used so that after certain intervals activate something, 
    				//ie, if(this.lifetime % "interval of time"  == 0){ doSOmething} 
    this.health = 100*healthMult; //assume values 0.1<=healthMult<=5; used to make them harder/easier for levels
 	world.addChild(this);
};
mothership.prototype = new Sprite();



mothership.prototype.update = function(d){
		this.move();
		if(this.lifeTime%150 == 0){
			this.dropBomb();
			//this.shootRight();
			//this.shootLeft();
		}
		if(this.lifeTime % 200 == 0){
			//this.shootMidInner();
			//this.shootMidOuter();
		}
		if(this.lifeTime % 400 == 0){
			//this.shootMidOuter();
			//this.shootRight();
			//this.shootLeft();
		}

		this.lifeTime++;
};




mothership.prototype.update


// just moves left and right
mothership.prototype.move= function(){
	this.speedMult = 1;

	if(this.x + this.width/2 < canvas.width && this.forward == true){
		this.x += this.speedMult;
	}
	if(this.x + this.width/2 >= canvas.width){
		this.forward = false;
	}
	if (this.x - this.width/2 >= 0 && this.forward == false){
		this.x -= this.speedMult;
	}
	if(this.x - this.width/2 <= 0){
		this.forward = true;
	}
};

//calculates angle from left side of ship
mothership.prototype.lRot = function(player){
	var xDist = (this.x - this.width/2) - player.x;
	var yDist = (this.y + this.height/2) - player.y;
	var angle = Math.atan2(yDist, xDist);
	this.lAngle = angle + DTR(180);
};

//calculates angle from right side of ship
mothership.prototype.rRot = function(player){
	var xDist = (this.x + this.width/2) - player.x;
	var yDist = (this.y - this.height/2) - player.y;
	var angle = Math.atan2(yDist, xDist);
	this.rAngle = angle + DTR(180);
};



//controls inner middle guns
mothership.prototype.shootMidInner = function(){
	var tempMr = new bAmmo(this.x+60, this.y + this.height/2, 0); //middle right
	var tempMl = new bAmmo(this.x-60, this.y + this.height/2, 0); //middle left
};
//controls mid outer guns
mothership.prototype.shootMidOuter = function(){
	var tempMr = new bAmmo(this.x+ this.width/4 +10, this.y + this.height/2, 0); //middle right
	var tempMl = new bAmmo(this.x- this.width/4 - 10, this.y + this.height/2, 0); //middle left
};
//controls right side gun
mothership.prototype.shootRight = function(){
	console.log("in shoot right!");
	var tempR = new bAmmo(this.x + this.width/2, this.y + this.height/2, this.rAngle); //right end of ship
};
//controls left side gun
mothership.prototype.shootLeft = function(){
	var tempL = new bAmmo(this.x - this.width/2, this.y + this.height/2, this.lAngle); //left end of ship
};
//drops bomb from middle
mothership.prototype.dropBomb = function(){
	var tempB = new explosive(this.x, this.y + this.height/2);
};
//removes mothership
mothership.prototype.deleteThis = function(){
	this.manager.motherArr.remove(this);
	world.removeChild(this);
};

//Bomb that gets dropped from middle of ship, after a short delay it explodes into bullets
//called through dropBomb prototype in mothership, which calls it in update.
/* --------------------------------------------------------------------------------------------------------
 * bugs: the explosive is blowing up too early, effectively ignoring the lifeTime % 5000 == 0
 * in addition I don't think the explosive gets removed properly because each time it gets called again
 * it becomes much faster each time.
 */


function explosive(x,y){
	this.x = x;
	this.y = y;
	this.width = 25;
	this.height = 25;
	this.image = Textures.load("http://www.colorhexa.com/ffa500.png");
	this.lifeTime = 0;
	world.addChild(this);
};
explosive.prototype = new Sprite();

explosive.prototype.update = function(){
	this.move();
	if(this.lifeTime % 5000 == 0){
		var tempMq = new bAmmo(this.x, this.y, Math.random()* 360);
		var tempMw = new bAmmo(this.x, this.y, Math.random()* 360);
		var tempMe = new bAmmo(this.x, this.y, Math.random()* 360);
		var tempMr = new bAmmo(this.x, this.y, Math.random()* 360);
		//world.removeChild(this);
	}
	this.lifeTime++;
};

explosive.prototype.move = function(){
	var speed = 1;
	this.y += speed;
};


function bAmmo(x,y,angle){
	//this.player = player;
	this.angle = angle;
	Sprite.call(this);

    this.width = 17.5/3;
    this.height = 22.5/3;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    //this.image = Textures.load("http://www.colorhexa.com/0f8921.png");
    this.image = Textures.load("http://www.colorhexa.com/ffa500.png"); //orange
    world.addChild(this);
};

bAmmo.prototype = new Sprite();


bAmmo.prototype.update = function(d){
	var xVel = 1;
	var yVel = 1;
		
		
		if(this.angle == 0){
		this.y += yVel;
		//this.x += xVel;
		}
		else{
		this.x += xVel * Math.cos(this.angle);
		this.y += yVel * Math.sin(this.angle);
		}
		if(checkPOBn(this,this.player)){
			world.removeChild(this);
		}
	
};








