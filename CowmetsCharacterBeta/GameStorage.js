function GameStorage(levels){
	this.seconds = 0;
	this.lifeTime = 0;
	
	
	
	this.pause = false;
	
	
	
	
	
	this.imArr = new Array();
	
	
		
		
		
	this.maxGridCellX=20;
	this.maxGridCellX=20;
	
	
	this.maxGridCellX=20;
	this.maxGridCellY=20;
	this.maxnumcells=40;
	//this.test = 0;
	

	
	
    this.pWepT = "ammo";
    this.pWepL = 2;
    this.pWepB = false;
    this.pWepU = null;
    this.currLevel = 0;
	
	
	
	
	//x
	gInput.addBool(88,"x");
	//m
	gInput.addBool(77, "m");
	//space
	gInput.addBool(32, "space");
	//shift
	gInput.addBool(16, "shift");

	//A
	gInput.addBool(65, "left");
	//D
	gInput.addBool(68, "right");
	//S
	gInput.addBool(83, "down");
	//W
	gInput.addBool(87, "up");
	
	//q
	gInput.addBool(89, "q");
	//e
	gInput.addBool(69, "e");
	
	//left key
	gInput.addBool(37, "left2");
	//right key
	gInput.addBool(39, "right2");
	//down key
	gInput.addBool(40, "down2");
	//up key
	gInput.addBool(38, "up2");
	world.addChild(this);
}




GameStorage.prototype.initialize = function (d){	
};










GameStorage.prototype.update = function (d){
	this.seconds += (d*MSPF)/1000;
	this.lifeTime++;

};

































function check2Ob(ob1, ob2) {
	if(ob2=== undefined){
		console.log(ob1);
	}
    var minX = ob1.x - ob1.width/2;;
    var maxX = ob1.x + ob1.width/2;
    var minY = ob1.y - ob1.height/2;
    var maxY = ob1.y + ob1.height/2;

    var minX2 = ob2.x - ob2.width/2;;
    var maxX2 = ob2.x + ob2.width/2;
    var minY2 = ob2.y - ob2.height/2;;
    var maxY2 = ob2.y + ob2.height/2;


    if (maxX2 >= minX && minX2 <= maxX && maxY2 >= minY && minY2 <= maxY) {
        return true;
    }
    return false;
}







//check if point is out of bound
var checkPOBn = function(ob){
		//If it goes off the top or bottom edge
	if(ob.y+ob.height/2 < -200){
		
		
		
		//console.log("top");
		return true;
		
	}
	
	if(ob.y-ob.height/2 > canvas.height+50){
		//console.log("bottom");
		return true;
		
	}
	
	
	//If it goes off the left or right edge
	if(ob.x+ob.width/2 < -100){
		//console.log("left");
		return true;
		
	}if(ob.x-ob.width/2  > canvas.width+100){
		//console.log("right");
		return true;
		
	}
	return false;
};





//check if point is out of bound
//needs work for corners
var checkPOB = function(ob,willDelete){
		//If it goes off the top or bottom edge
	if(ob.y < 0+ob.height/2){
		//console.log("1");
		if(willDelete){
			world.removeChild(ob);
		}else{
			keepInBounds(ob,true,true);
		}
		
	}if(ob.y > canvas.height-ob.height/2){
		//console.log("2");
		if(willDelete){
			world.removeChild(ob);
		}else{
			keepInBounds(ob,true,false);
		}
		
	}
	//If it goes off the left or right edge
	if(ob.x < 0+ob.width/2){
		//console.log("3");
		if(willDelete){
			world.removeChild(ob);
		}else{
			keepInBounds(ob,false,true);
		}
		
	}if(ob.x > canvas.width-ob.width/2){
		//console.log("4");
		if(willDelete){
			world.removeChild(ob);
		}else{
			keepInBounds(ob,false,false);
		}
		
	}
	
};


var keepInBounds = function(ob,isY,isUL){
	if(isY){
		if(isUL){
			ob.y = 0-ob.height/2; //Place it at the top
		}else{	
	    	ob.y = canvas.height-ob.height/2; //Place it at the bottom
	   }
	}else{
		if(isUL){
			ob.x = 0+ob.width/2; //Place it at the left
		}else{
			ob.x = canvas.width-ob.width/2; //Place it at the right6
		}
	}	
};





//used for collision detection later
var  calcIndexes = function(obj){
	var arr = new Array();
	
	var nI =     ((obj.x - obj.width/2)    -       (obj.x - obj.width/2)%20)/20 ;
	var nJ =     ((obj.y - obj.height/2)    -       (obj.y - obj.height/2)%20)/20 ;
	arr.push(new indexPair(nI,nJ));

	
	nI =     ((obj.x + obj.width/2)    -       (obj.x + obj.width/2)%20)/20 ;
	nJ =     ((obj.y + obj.height/2)    -       (obj.y + obj.height/2)%20)/20 ;
	arr.push(new indexPair(nI,nJ));
	
	arr=fillIndex(arr);
	return arr;
};


var fillIndex = function(arr){
	var t = new Array();
	var begin = arr[0];
	var end = arr[1];
	
	
	var iEnd = end.x-begin.x;
	var jEnd = end.y-begin.y;
	for(var i = 0; i<= iEnd; i++){
		for(var j = 0; j<=jEnd; j++){
			t.push(new indexPair(begin.x+i,begin.y+j));
		}
	}
	

	return t;
	
};








var colSingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function collManager() {
  	
    // Singleton

    return {
      // Public methods and variables
      capacity: 0, 
      
      matrix: new Array(),
      
      
      init: function(){
      	 
    	for(var i =0;i<45;i++){
    		this.matrix.push(new Array());
    		for(var j = i; j<45;j++){
    			this.matrix[i].push(new List());
    		}
    	}
      	
      },
      
      update: function(d){
      	
      },
      
      
      addToList: function(ob, i, j){
      	if(i>=0 && i<45 && j>=0 && j<45){
      		this.matrix[i][j].push(ob);
      		this.capacity++;
      	}else{
      		console.log("failed at" + i + " " + j + " with " + ob);
      	}
      	
      },
      
      removeFromList: function(ob, i, j){
      	if(i>=0 && i<45 && j>=0 && j<45){
      		this.matrix[i][j].remove(ob);
      		this.capacity--;
      	}else{
      		console.log("failed at" + i + " " + j + " with " + ob);
      	}
      	
      },
      
      checkList: function(ob, i,j){
      	 for(var t = 0; t< matrix[i][j].length;t++){
      		if(check2Ob(ob,matrix[i][j].getAt(t))){
      			//found collision  
      			console.log("found collisions"); 			
      			break;
      		}
      	 }
      },
 
      
      clean: function() {
      	  this.matrix = null;
      	  this.capacity = 0;
      	  this.matrix = new Array();
      	  for(var i =0;i<45;i++){
    		 this.matrix.push(new Array());
    		 for(var j = i; j<45;j++){
    			this.matrix[i].push(new List());
    		 }
    	  }
       }
    };
    
    

 
  };
 
 
 
 
 
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = collManager();
        instance.init();
        world.addChild(instance);
      }
 
      return instance;
    }
 
  };
 
})();














function indexPair(x,y){
	this.x = x;
	this.y = y;
}

