function Level(gameStorage){
	this.gs = gameStorage;	
	this.p = new MadCow(canvas.width/2,    5*canvas.height/6,   this.gs.pWepU,  this.gs.pWepT,   this.gs.pWepL,this.gs.pWepB);
	this.aM = new alienManager(this.p,false);
    this.pM = new PowerUpManager(this.p);
    this.rM = new rockManager(this.p,false);
    this.bM = new bossManager(this.p);
    
    
    
    
    this.textPoints = new TextBox();
    this.textPoints.x = 10;
    this.textPoints.y = 10;
    this.textPoints.width = 100;
    this.textPoints.height = 30 ;
    this.textPoints.drawBG = true;
    this.textPoints.bgColor = "#ffff00";
    this.textPoints.fontSize = 16;
    
    
    this.textResources = new TextBox();
    this.textResources.x = 10;
    this.textResources.y = 30;
    this.textResources.width = 100;
    this.textResources.height = 30 ;
    this.textResources.drawBG = true;
    this.textResources.bgColor = "#ffff00";
    this.textResources.fontSize = 16;
    
    

    this.textHealth = new TextBox();
    this.textHealth.width = 100;
    this.textHealth.height = 30 ;
    this.textHealth.x = canvas.width-this.textHealth.width-10;
    this.textHealth.y = 10;
    this.textHealth.drawBG = true;
    this.textHealth.bgColor = "#ff00ff";
    this.textHealth.fontSize = 16;
    
    
	this.lifeTime = 0;
	this.hoardTimer = 100;
	
	this.pauseWait = 20;
	this.pressedPause = false;
	
	this.switchWait = 20;
	this.pressedSwitch = false;

	
	
	this.upgradeWait = 20;
	this.pressedUpgrade = false;
	this.totalPoints = 0;
	
	
	
	
	
	
	this.b = new backgroundOb();
	
	
	this.spArrL = new Array();
	this.spArrR = new Array();
	this.spArrM = new Array();
	this.spArrS = new Array();
	
	this.spArrL.push([0,0,0,0,0, 90,90,0,0, 0,-90,-90]);
	this.spArrR.push([0,0,0,0,0, -90,-90,0,0, 0,90,90]);
	this.spArrS.push(10);
	
	
	this.spArrL.push([0, 90, -90, 90, -90, 90, -90, 90, -90, 0]);
	this.spArrR.push([0, -90, 90, -90, 90, -90, 90, -90, 90, 0]);
	this.spArrS.push(15);


	this.spArrL.push([0, 90, 0, 90, 90, 90, 0, 90, 0, 90, 90, 90]);
	this.spArrR.push([0, -90, 0, -90, -90, -90, 0, -90, 0, -90, -90, -90]);
	this.spArrS.push(15);
	
	this.spArrL.push([0, 0, 0, 0, 0, 0, 90, 0, 0, 90, 90, 0, 0, 0, 0]);
	this.spArrR.push([0, 0, 0, 0, 0, 0, -90, 0, 0, -90, -90, 0, 0, 0, 0]);
	this.spArrS.push(15);
	
	
	this.spArrL.push([0, 0, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, -90, -90, 0, 0, 0, 0, 0, 0, 90, 90, 0, 0, -90, -90]);
	this.spArrR.push([0, 0, 0, 0, 0, 0, -90, -90, 0, 0, 0, 0, 90, 90, 0, 0, 0, 0, 0, 0, -90, -90, 0, 0, 90, 90]);
	this.spArrS.push(15);
	
	this.spArrL.push([0,0,0,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,0,0,0,0,0,0,0]);
	this.spArrR.push([0,0,0,0,0,0,0,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,-9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0]);
	this.spArrS.push(1);
	
	this.initPattern = new Array();
	for(var i=0; i< 6;i++){
		this.initPattern.push(Math.floor(Math.random()*5));
	}
	this.initPatternIndex = 0;
	
	
	
	
	//random probability for enemy spawn rate
	this.Ssr;
	this.Fsr;
	this.SAsr;
	this.BAsr;
	
	this.hardPause=false;
	this.gameOver = false;
	
}


Level.prototype.initialize = function(){
	world.addChild(this);
	world.addChild(this.textPoints);
	world.addChild(this.textResources);
	world.addChild(this.textHealth);
	this.p.init();
	
	
	
	this.p.pauseP();
	
	this.b.pleaseUpdate = !this.b.pleaseUpdate;
	this.aM.pause = !this.aM.pause;
	this.rM.pause = !this.rM.pause;
	
};






Level.prototype.update = function(d){
	if(this.p.h.health<=0){
		this.p.pauseP();
		this.aM.pause = true;
		this.rM.pause = true;
		this.hardPause = true;
		this.b.pleaseUpdate = false;
		this.gameOver = true;
	}
	
	
	if(this.p.justHitComet){
			this.p.pauseP();
			this.aM.pause = !this.aM.pause;
			this.rM.pause = !this.rM.pause;
			this.b.pleaseUpdate = !this.b.pleaseUpdate;
			
			if(this.p.justHitHome){this.p.justHitHome = false;
			}else{
				this.p.justHitComet = false;
			}
	}
	
	
	
	
	if(gInput.y&&!this.gameOver){
		this.p.pauseP();
		this.aM.pause = !this.aM.pause;
		this.rM.pause = !this.rM.pause;
		this.hardPause = !this.hardPause;
		this.b.pleaseUpdate = !this.b.pleaseUpdate;
	}
	
	
	
	
	

	if(!this.pressedPause){
		
		if(gInput.m && !this.hardPause){
			this.p.pauseP();
			this.aM.pause = !this.aM.pause;
			this.rM.pause = !this.rM.pause;
			this.pressedPause = true;
			this.b.pleaseUpdate = !this.b.pleaseUpdate;
		}else{
			
		}
		
	}
	///*
	
	 
    if(this.p.comet!=null){
		
		
		if(this.p.comet.justHitPlayer){
			
			
			this.aM.pause = true;
			this.rM.pause = true;
			this.p.comet.justHitPlayer=false;
			this.b.pleaseUpdate = false;
		
		}
		if(this.p.comet.justHitHome){
		
			this.aM.pause = false;
			this.rM.pause = false;
			this.p.comet.justHitHome=false;
			this.b.pleaseUpdate = true;
		
		}
		
		
		
	}
	
	
	
	
	//*/
	
	if(!this.pressedSwitch){
		
		if(gInput.e && !this.p.pause){
			console.log("calling swiwtchWep at" + this.lifeTime);
			this.p.switchWep();
			this.pressedSwitch=true;
		}else{
			//console.log("not calling");
		}
	}
	
	
	if(this.pressedSwitch){
    	--this.switchWait;
    	
    	if(this.switchWait<=0){
    		this.switchWait = 20;
    		this.pressedSwitch = false;
    		
    	}
    }
    
    
    
    if(!this.pressedUpgrade){
		
		if(gInput.f && !this.p.pause){
			console.log("upgraded");
			this.p.upgradeThis();
			this.pressedUpgrade = true;
		}else{
			
		}
	}
	
	
	if(this.pressedUpgrade){
    	--this.upgradeWait;
    	
    	if(this.upgradeWait<=0){
    		this.upgradeWait = 20;
    		this.pressedUpgrade = false;
    		
    	}
    }
	
	
	
	
	
	
	
	

    if(this.pressedPause){
    	--this.pauseWait;
    	
    	if(this.pauseWait<=0){
    		this.pauseWait = 20;
    		this.pressedPause = false;
    		
    	}
    }
   
    
    
    
    if(!this.p.pause&&!this.gameOver){

    	
    	
    	
    	if(this.lifeTime % 800 ==0){
    		console.log("createdPowerUp1");
    		//this.pM.createPowerup1();
    	}
    	
    	
    	if(this.lifeTime % 300 ==0 ){
    		console.log("createdPowerUp2");
    		//this.pM.createPowerup2();
    	}
    	
    	
    	
    	if(this.lifeTime % 1400 ==0){
    		console.log("createdPowerUp3");
    		//this.pM.createPowerup3();
    	}
    	
    
    	
    	
    	if(this.lifeTime %  100 ==0){
    		this.rM.generateSR(Math.random()*canvas.width/2+canvas.width/4,0, Math.random()*40-20, 1, 1,false);
    	}
    	
    	if(this.lifeTime %  200 ==0){
    		//this.rM.generateBR(Math.random()*canvas.width/2+canvas.width/4,0, Math.random()*70-35, 1, 1,false);
    	}
    	
    	
    	
    	
    	
    	if(this.lifeTime %  500 ==0){
    		
    		
    		
    		
    		this.aM.createS(0, 0, this.spArrL[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		this.aM.createS(60, 0, this.spArrL[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		this.aM.createS(120, 0, this.spArrL[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		//this.aM.createS(150, 0, this.spArrL[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		
    		
    		this.aM.createS(canvas.width-60, 0, this.spArrR[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		this.aM.createS(canvas.width-120, 0, this.spArrR[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		this.aM.createS(canvas.width-180, 0, this.spArrR[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		//this.aM.createS(canvas.width-170, 0, this.spArrR[ this.initPattern[this.initPatternIndex]], this.spArrS[this.initPattern[this.initPatternIndex]]);
    		
    		if(++this.initPatternIndex>= this.initPattern.length){
    			for(var i=0; i< 6;i++){
					this.initPattern.pop();
				}
				for(var i=0; i< 6;i++){
					this.initPattern.push(Math.floor(Math.random()*5));
				}
			
				this.initPatternIndex = 0;
    		}
 
    	}
    	
    	if(this.lifeTime % 1000==0){
    		console.log("follower");
    		this.aM.createF(canvas.width/2,-20,200);
    		
    	}
    	
    	if(this.lifeTime % 800==0){
    		
    		this.aM.createF(canvas.width/2,-20,200);
    		
    	}
    	
    	
    	
    	if(this.lifeTime ==200){
    		this.rM.generateC(canvas.width+50,50, -60, 1, 1, 8,0.2,0.5,0.3);
    	}
    	
    	
    	if(this.lifeTime %1500==0){
    		this.rM.generateC(canvas.width+50,50, -60, 1, 1, 8,0.2,0.5,0.3);
    	}
    	
    	/*
    	this.rM.setMax(20);
    	
    	if(this.lifeTime==600){
    		console.log(this.rM.switchAuto());
    	}
    	

    	if(this.lifeTime ==700){
    		console.log(this.rM.switchAuto());
    	}
    	*/
    	
    	
    	this.lifeTime++;
    	
    	//console.log("Total overall points " + this.totalPoints);
    }else{
    	//draw pause menu
    }
    this.totalPoints = this.aM.alienPoints + this.rM.rockPoints; 
    	this.textPoints.text = "Points " +this.totalPoints;
    	this.textResources.text = "Resources " + (Math.floor(this.totalPoints/10) + this.rM.resources);
    	this.p.resources = (Math.floor(this.totalPoints/10) + this.rM.resources);
    	this.textHealth.text = this.p.h.health/this.p.defaultHealth*100 +"%";
};




Level.prototype.beginComet = function(){};








function backgroundOb(){
			/*
	this.background1 = new Sprite();
	this.background1.x = 0;
	this.background1.y = 0;
	this.background1.width = canvas.width;
	this.background1.height = canvas.height;
	
	this.background1.image = Textures.load("http://www.motionbackgroundsforfree.com/wp-content/uploads/2012/04/Screen-shot-2012-04-13-at-2.24.50-PM.png");
	world.addChild(this.background1);
	
	this.background2 = new Sprite();
	this.background2.x = 0;
	this.background2.y = -canvas.height;
	this.background2.width = canvas.width;
	this.background2.height = canvas.height;
	
	this.background2.image = Textures.load("http://www.motionbackgroundsforfree.com/wp-content/uploads/2012/04/Screen-shot-2012-04-13-at-2.24.50-PM.png");
	world.addChild(this.background2);
	
	*/
	world.addChild(this);
	this.tiles = new Array();
	for(var i = 0; -(320*4)+320*i<=320*4;i++){
		for(var j = 0; j<2; j++){
			this.tiles.push(new singleTile(this,320*j,-(320*4)+320*i));
		}
	}
	
	
	
	this.pleaseUpdate = true;
}


function singleTile(manager,x,y){
	this.manager = manager;
	Sprite.call(this);

	this.x = x;
	this.y = y;
	this.width = 320;
	this.height = 320;
	
	this.image = Textures.load("http://farm5.staticflickr.com/4143/4866427589_ae94e873c2_z.jpg");
	world.addChild(this);
	
}

singleTile.prototype = new Sprite();
singleTile.prototype.update = function(d){
	if(this.manager.pleaseUpdate){
		this.y++;
		if(this.y>=this.height*4){
			this.y= -(320*4);
		}
		
	}
};



function gameOverS(manager,x,y){
	this.manager = manager;
	Sprite.call(this);

	this.x = x;
	this.y = y;
	this.width = canvas.width;
	this.height = canvas.height;
	
	this.image = Textures.load("http://farm5.staticflickr.com/4143/4866427589_ae94e873c2_z.jpg");
	world.addChild(this);
	
}


