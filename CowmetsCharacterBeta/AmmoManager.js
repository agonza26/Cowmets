function AmmoMNGR(player,cellSize,numCelli,numCellj){
	this.player = player;
	this.pause = false;
	
	this.cell_size = cellSize;
	this.maxJ = numCellj;
	this.maxI = numCelli;
	
	


	this.ammoArr = new Array();

}





AmmoMNGR.prototype.getAmmo = function(type,level,x,y){
	
	
	switch(type){
		
		case "ammo":
			switch(level){
				case 0:
					this.ammoArr.push(new mcAmmo(x,y,0,false,this));
					break;
					
				case 1:
					this.ammoArr.push(new mcAmmo(x+5,y,0,false,this));
					this.ammoArr.push(new mcAmmo(x-5,y,0,false,this));
					break;
				case 2:
					this.ammoArr.push(new mcAmmo(x+10,y,0,false,this));
					this.ammoArr.push(new mcAmmo(x,y,0,false,this));
					this.ammoArr.push(new mcAmmo(x-10,y,0,false,this));
					break;
					
					
					
					
				case 3:
					this.ammoArr.push(new mcAmmo(x-10,y,-15,false,this));
					this.ammoArr.push(new mcAmmo(x,y,0,false,this));
					this.ammoArr.push(new mcAmmo(x+10,y,+15,false,this));
					break;
				case 4:
					this.ammoArr.push(new mcAmmo(x+15,y,0,false,this));
					this.ammoArr.push(new mcAmmo(x+5,y,0,false,this));
					this.ammoArr.push(new mcAmmo(x-5,y,0,false,this));
					this.ammoArr.push(new mcAmmo(x-15,y,0,false,this));
					break;
				default:
					this.ammoArr.push(new mcAmmo(x,y,0,false,this));
					break;
				
			}
		
			break;
			
			
			
			
		case "missile":
			
			switch(level){
				case 0:
					this.ammoArr.push(new mcMissile(x,y,this));
					break;
					
				case 1:
					this.ammoArr.push(new mcMissile(x+5,y,this));
					this.ammoArr.push(new mcMissile(x-5,y,this));
					break;
				case 2:
					this.ammoArr.push(new mcMissile(x+10,y,this));
					this.ammoArr.push(new mcMissile(x,y,this));
					this.ammoArr.push(new mcMissile(x-10,y,this));
					break;
					
				default:
					this.ammoArr.push(new mcMissile(x,y,this));
					break;
				
			}
			break;
		case "laser":
			switch(level){
				case 0:
					this.ammoArr.push( new mcLaser(x,y,this));
					break;
				case 1:
					this.ammoArr.push(new mcLaser(x-10,y,this));
					this.ammoArr.push(new mcLaser(x+10,y,this));
					break;
				case 2:
					this.ammoArr.push(new mcLaser(x-10,y,this));
					this.ammoArr.push(new mcLaser(x,y,this));
					this.ammoArr.push(new mcLaser(x+10,y,this));
					
					break;
				default:
					this.ammoArr.push(new mcLaser(x,y,this));
					break;
			}
			break;
			
		case "grenade":
	
			
			
			
			switch(level){
				case 0:
					this.ammoArr.push(new mcGrenade(x,y,0,0,1,this));
					break;
				case 1:
					this.ammoArr.push( new mcGrenade(x+5,y,30,0,1,this));
					this.ammoArr.push(new mcGrenade(x-5,y,-30,0,1,this));
					break;
				case 2:
					this.ammoArr.push(new mcGrenade(x+5,y,30,45,0.9,this));
					this.ammoArr.push(new mcGrenade(x-5,y,-30,45,1.5,this));
					
					break;
				default:
					this.ammoArr.push(new mcGrenade(x+15,y,45,45,0.5,this));
					this.ammoArr.push(new mcGrenade(x-25,y,-45,45,1,this));
					this.ammoArr.push(new mcGrenade(x,y,0,0,1.5,this));
					this.ammoArr.push(new mcGrenade(x+5,y,15,0,1,this));
					this.ammoArr.push(new mcGrenade(x-5,y,-15,0,0.5,this));
					break;
			}
			break;
		default:
			this.ammoArr.push(new mcAmmo(x,y,0,false,this));
			break;
	}

};








 




function mcAmmo(x,y,angle,dependant,manager){
	this.isColliding=false;
	this.manager = manager;
	this.dependand=dependant;
	
	
	this.switchDir = false;
	this.defaultAngle = angle;
	
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

mcAmmo.prototype = new Sprite();

 
 

mcAmmo.prototype.update = function(d){
	if(!this.isColliding){
		var xVel=2;
		var yVel=8;
		
		if(this.switchDir){
			xVel=8;
			yVel=2;
		}

		this.x += xVel*Math.sin(DTR(this.defaultAngle));
		this.y -= yVel*Math.cos(DTR(this.defaultAngle));
		
		
		
		
		
		if(checkPOBn(this)){
			this.deleteThis();
			console.log("removed bullet");
		}
	}else{
		this.deleteThis();
	}
};







mcAmmo.prototype.deleteThis = function(){
	this.manager.ammoArr.splice(this.manager.ammoArr.indexOf(this),1);
	//this.manager.ammoArr.remove(this);
	world.removeChild(this);
};









function mcGrenade(x,y,angle,modAngle,upgrade,manager){
	this.isColliding=false;
	this.manager= manager;
	this.lifeTime= 0;
	this.defaultAngle = angle;
	this.mdA = modAngle;
	this.upgrade = upgrade;
	Sprite.call(this);

    this.width = 17.5/1.5;
    this.height = 22.5/1.5;
    
    this.angle = angle;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    this.fuse = 70;
  
    
    this.image = Textures.load("http://www.colorhexa.com/ffff00.png");
    
    world.addChild(this);
};

mcGrenade.prototype = new Sprite();



mcGrenade.prototype.update = function(d){
	if(!this.isColliding){
		//console.log(Math.sin(DTR(this.defaultAngle)));
		this.x += 2*Math.sin(DTR(this.defaultAngle));
		this.y -= 4*Math.cos(DTR(this.defaultAngle));
		console.log("grenade ALive");
		
		if(this.lifeTime > this.fuse){
			world.removeChild(this);
			console.log("grenade died");
			var temp0 = new  mcAmmo(this.x,this.y,0+this.mdA,false);
			var temp1 = new  mcAmmo(this.x,this.y,90+this.mdA,true);
			var temp2 = new  mcAmmo(this.x,this.y,180+this.mdA,false);
			var temp2 = new  mcAmmo(this.x,this.y,270+this.mdA,true);
			
		}
		

		this.lifeTime += this.upgrade*1;
		if(this.x<0 || this.x>canvas.width || this.y<0 || this.y>canvas.width){
			world.removeChild(this);
		}
		
		checkPOB(this,true);
	}else{
		this.deleteThis();
	}
};

mcGrenade.prototype.deleteThis = function(){
	this.manager.ammoArr.remove(this);
	world.removeChild(this);
};














function mcLaser(x,y,manager){
	this.isColliding=false;
	this.manager = manager;
	this.increment= Math.floor(y/5);
	console.log(this.increment);
	this.lifeTime = 0;
	
	Sprite.call(this);

    this.width = 3;
    this.height = y/2;
    

    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height;
    this.x = x;
    this.y = y;
    
  
    
    this.image = Textures.load("http://www.colorhexa.com/00ff00.png");
    
    world.addChild(this);
};
mcLaser.prototype = new Sprite();

mcLaser.prototype.update = function(d){
	if(!this.isColliding){
		this.y -= 20;
		
		if(checkPOBn(this)){
			this.deleteThis();
		}
		this.lifeTime++;
	}else{
		this.deleteThis();
	}
};


mcLaser.prototype.deleteThis = function(){
	this.manager.ammoArr.remove(this);
	world.removeChild(this);
};









function mcMissile(x,y,manager){
	this.manager = manager;
	this.lifetime =0;
	this.vel = 2;
	Sprite.call(this);

    this.width = 17.5/2;
    this.height = 22.5/2;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    this.image = Textures.load("http://www.colorhexa.com/ff0000.png");
    this.isColliding=false;
    world.addChild(this);
};

mcMissile.prototype = new Sprite();


mcMissile.prototype.update = function(d){
	console.log("alive");
	if(!this.isColliding){
		
		checkPOB(this,true);
		if(this.lifetime >=70){
			this.vel = 8;
		}
		
		
		
		this.y -=this.vel;
		//if(checkPOBn(this)){
		//	world.removeChild(this);
		//}
		this.lifetime++;
	}else{
		this.deleteThis();
	}
		
};

mcMissile.prototype.deleteThis = function(){
	this.manager.ammoArr.remove(this);
	world.removeChild(this);
};