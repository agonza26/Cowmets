function Pause(gameStorage){
	this.gs = gameStorage;	
	
    this.textPoints = new TextBox();
    this.textPoints.x = 0;
    this.textPoints.y = 10;
    this.textPoints.width = 100;
    this.textPoints.height = 30 ;
    this.textPoints.drawBG = true;
    this.textPoints.bgColor = "#ffff00";
    this.textPoints.fontSize = 16;
    
    
    this.bu.addChildren(5);
    
	this.lifeTime = 0;
	this.hoardTimer = 100;

	
}


Pause.prototype.initialize = function(){
	world.addChild(this);
	world.addChild(this.textPoints);
};






Pause.prototype.update = function(d){
	

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
    	
    	
    	
    	
    	
    	//console.log("Total overall points " + this.totalPoints);
    }else{
    	//draw pause menu
    }
};
Level.prototype.beginComet = function(){};





