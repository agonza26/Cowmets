
// check if mouse's x and y coordinates are within a sprite's area
function check_b(sprite){
    var min_x = sprite.x;
    var max_x = sprite.x + sprite.width;
    var min_y = sprite.y;
    var max_y = sprite.y + sprite.height;
    var mx = gInput.mouse.x;
    var my = gInput.mouse.y;
    
    if(mx <= max_x && mx >= min_x && my <= max_y && my >= min_y){
        return true;
    }
    return false;
}



function Button1(x,y){
	this.hide = false;
	this.displayingChildren = false;
	this.clickedOn = false;
	this.init = false;
	Sprite.call(this);
	this.childX = canvas.width/2;
	
	this.childrens = new List();
	this.relatives = new List();
	
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 30;
	this.image = Textures.load("http://www.colorhexa.com/00ffff.png");
	world.addChild(this);
	gInput.addMouseDownListener(this);
	gInput.addMouseUpListener(this);	
}







//
//when init relative is empty 
//were going to have 
//addrelatives 
//addchildren




Button1.prototype = new Sprite();

Button1.prototype.onMouseDown = function(){
    if(check_b(this)){
    	this.clickedOn = true;
		console.log("mouse is down on b1.");
	}else{
		this.clickedOn = false;
	}
};


Button1.prototype.onMouseUp = function(){
	if(this.displayingChildren){
			this.diplayChildren = false;
			this.hideChildren();
	}
	if(this.clickedOn){
		if(check_b(this)){
			this.displayingChildren = true;
			this.displayChildren();
		}
	}
	
	

};







Button1.prototype.addChildren = function(num){
	this.childX = canvas.width/(num+1);
	
	for(var i =0; i<num;++i){
		this.childrens.push(new Button2(this.childX+this.childX*(i), this.y-150));
	}
	
};




Button1.prototype.displayChildren = function(){
	console.log("displaying children");
	for(var i = 0; i<this.childrens.length; ++i){
		this.childrens.getAt(i).display();
	}
};


Button1.prototype.hideChildren = function(){
	console.log("hiding children");
	for(var i = 0; i<this.childrens.length; ++i){
		this.childrens.getAt(i).hide();
	}
};


















function Button2(x,y){
	this.hidden = false;
	Sprite.call(this);
	this.oX = x;
	this.oY=y;
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 30;
	this.image = Textures.load("http://www.colorhexa.com/ff0000.png");

	
	gInput.addMouseDownListener(this);
	gInput.addMouseUpListener(this);	
	world.addChild(this);
}
Button2.prototype = new Sprite();




Button2.prototype.display = function(){
	this.x=this.oX;
	this.y=this.oY;
	this.hidden = false;
};


Button2.prototype.hide = function(){
	this.x = -20000;
	this.y = -20000;
	this.hidden = true;
};









Button2.prototype.onMouseDown = function(){
    if(check_b(this)){
    	this.clickedOn = true;
	}else{
		this.clickedOn = false;
	}
};

Button2.prototype.onMouseUp = function(){
	if(this.clickedOn){
		if(check_b(this)){
			
		}
	}
};