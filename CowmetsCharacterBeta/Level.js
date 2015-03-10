function Level(gameStorage){
	this.gs = gameStorage;	
	this.p = new MadCow(canvas.width/2,    canvas.height/2,   this.gs.pWepU,  this.gs.pWepT,   this.gs.pWepL,this.gs.pWepB);
	this.aM = new alienManager(this.p,false);
    this.pM = new PowerUpManager(this.p);
    this.rM = new rockManager(this.p,false);
    this.bM = new bossManager(this.p);
    
    
	this.lifeTime = 0;
	this.hoardTimer = 100;
	
	this.pauseWait = 10;
	this.pressedPause = false;
	
}


Level.prototype.initialize = function(){
	world.addChild(this);
};






Level.prototype.update = function(d){

	if(!this.pressedPause){
		
		if(gInput.m){
			this.p.pauseP();
			this.aM.pause = !this.aM.pause;
			this.rM.pause = !this.rM.pause;
			this.pressedPause = true;
			
		}else{
			
		}
	}
	
	
	
	
	
	
	
	
	if(this.p.pause){
		
	}
    if(this.pressedPause){
    	--this.pauseWait;
    	
    	if(this.pauseWait<=0){
    		this.pauseWait = 50;
    		this.pressedPause = false;
    		
    	}
    }
    
    
    if(!this.p.pause){
    	
    	if(this.lifeTime == 5){
    		this.bM.generateM (canvas.width/2,100, 1, 1);
    	}
    	//proof of concept, at certain intervals, create an object, right now everything spawns really close in time for testing
    	//bullet collision isnt fully implemented
    	
    	
    	
    	
    	if(this.lifeTime == 5){
    		this.aM.createS(0, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(50, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(100, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(150, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(200, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(250, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(300, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		
    		
    		this.aM.createS(0, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(50, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(100, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(150, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(200, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(250, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(300, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		
    	
    		
    		
    		//this.rM.generateSR(canvas.width/2-100,0, -10, 1, 1,false);
    		//this.rM.generateSR(canvas.width/2, 0, 0, 1, 1,false);
    		//this.rM.generateSR(canvas.width/2 + 100,0, 10, 1, 1,false);
    		//this.rM.generateSR(100,100, 0, 1, 1,true);
    		
    	}
    	
    	
    	
    	
    	
    	
    	if(this.lifeTime == 1000){
    		this.aM.createS(0, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(50, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(100, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(150, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(200, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(250, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(300, 0, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		
    		
    		this.aM.createS(0, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(50, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(100, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(150, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(200, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(250, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		this.aM.createS(300, 250, [0,0,0,0,0, 90,90,0,0, 0,-90,-90],10);
    		
    		
    		
    		
    		
    		//this.rM.generateSR(canvas.width/2-100,0, -10, 1, 1,false);
    		//this.rM.generateSR(canvas.width/2, 0, 0, 1, 1,false);
    		//this.rM.generateSR(canvas.width/2 + 100,0, 10, 1, 1,false);
    		//this.rM.generateSR(100,100, 0, 1, 1,true);
    		
    	}
    	
    	
    	if(this.lifeTime == 2000){
    		this.aM.createS(0, 0, [90,0,0,0,0, -90,0,-90,0,0, 0,90],10);
    		this.aM.createS(50, 0, [90,0,0,0,0, -90,0,-90,0,0, 0,90],10);
    		this.aM.createS(100, 0, [90,0,0,0,0, -90,0,-90,0,0, 0,90],10);
    		this.aM.createS(150, 0, [90,0,0,0,0, -90,0,-90,0,0, 0,90],10);
    		this.aM.createS(200, 0, [90,0,0,0,0, -90,0,-90,0,0, 0,90],10);
    		this.aM.createS(250, 0, [90,0,0,0,0, -90,0,-90,0,0, 0,90],10);
    		this.aM.createS(300, 0, [90,0,0,0,0, -90,0,-90,0,0, 0,90],10);
    		

    		
    		
    		
    		
    		//this.rM.generateSR(canvas.width/2-100,0, -10, 1, 1,false);
    		//this.rM.generateSR(canvas.width/2, 0, 0, 1, 1,false);
    		//this.rM.generateSR(canvas.width/2 + 100,0, 10, 1, 1,false);
    		//this.rM.generateSR(100,100, 0, 1, 1,true);
    		
    	}
    	
    	
    	
    	
    	
    	
    	//this.rM.setMax(20);
    	
    	
    	if(this.lifeTime==200){
    	//	console.log(this.rM.switchAuto());
    	}
    	
    	
    	
    	
    	
    	
    	if(this.lifeTime ==300){
    		this.rM.generateC(canvas.width+50,50, -60, 1, 1, 8,0.2,0.5,0.3);
    	}
    	
    	if(this.lifeTime ==700){
    		//console.log(this.rM.switchAuto());
    	}
    	
    	/*
    	if(this.lifeTime == 1000){
    		this.aM.createF(canvas.width/2,-20,200);
    	}
    	
    	
    	
    	
    	if(this.lifeTime == 500){
    		this.aM.createS(100, 0, [0,0,90, 0, 0,90,90,90],10);
    		this.aM.createS(150, 0, [0,0,90, 0, 0,90,90,90],10);
    		this.aM.createS(200, 0, [0,0,90, 0 ,0,90,90,90],10);
    	}
    	*/
    	//this.aM.updateMap();
    	this.lifeTime++;
    	
    }else{
    	//draw pause menu
    }
};
Level.prototype.beginComet = function(){};





