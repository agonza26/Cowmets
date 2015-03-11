useStates = true;
/**
 * Creates a new instance of StateManager or returns the singleton instance.
 * 
 * @class Singleton that draws and updates a stack of game states where the state on the top of the stack is always updated and drawn. By default there is a global reference called States.
 * @property {StateManager} instance The singlton instance.
 * @property {List} states The stack of game states. Note that the tail of the list is treated as the top of the stack.
 */
function StateManager(){
	if(this.__proto__.instance){
		return this.__proto__.instance;
	}
	this.__proto__.instance = this;
	this.states = new List();
	this.pushedWidgets = false;
	this.widgetsToAdd = new List();
	this.widgetsToRem = new List();
}

StateManager.prototype.instance = null;
StateManager.prototype.states = new List();
StateManager.prototype.pushedWidgets = false;
StateManager.prototype.widgetsToAdd = new List();
StateManager.prototype.widgetsToRem = new List();

/**
 * Pushes a state onto the top of the stack. If the state is already in the stack it is removed and re-inserted on the top of the stack.
 * 
 * @param {State} state The state to be pushed onto the stack;
 */
StateManager.prototype.push = function(state){
	this.states.remove(state);
	this.states.push(state);
	state.input.blur();
	if(!state.initialized){
		state.init();
	}
	/*for(var node = state.widgets.head; node != null; node = node.link){
		//println(node.item);
		this.widgetsToAdd.push(node.item);
	}*/
}


StateManager.prototype.push_front = function(state){
	this.states.remove(state);
	this.states.push_front(state);
	state.input.blur();
	if(!state.initialized){
		state.init();
	}
	/*for(var node = state.widgets.head; node != null; node = node.link){
		//println(node.item);
		this.widgetsToAdd.push(node.item);
	}*/
}

/**
 * Removes the given state from the stack.
 * 
 * @param {State} state The state to be removed from the stack.
 */
StateManager.prototype.remove = function(state){
	this.states.remove(state);
	if(display != undefined){
		for(var node = state.widgets.head; node != null; node = node.link){
			this.widgetsToRem.push(node.item);
		}
		//println(this.widgetsToRem.length);
		/*for(var node = this.states.tail.item.widgets.head; node != null; node = node.link){
			this.widgetsToAdd.push(node.item);
		}*/
	}
}

/**
 * Removes and returns the top of the stack.
 * 
 * @return {State} The popped state.
 */
StateManager.prototype.pop = function(){
	var temp = this.states.tail.item;
	this.remove(temp);
	this.states.tail.item.input.blur();
	return temp;
}

/**
 * Returns the top of the stack;
 * 
 * @return {State} The state at the top of the stack.
 */
StateManager.prototype.current = function(){
	return this.states.tail.item;
}

/**
 * Calls update on the states in the stack.
 * 
 * @param {number} delta The time since the last update.
 */
StateManager.prototype.update = function(delta){
	this.states.foreach(updateState, {delta:delta});
	if(display != undefined){
		var state = this.states.head.item;
		if(state.updateWidgets){
			for(var node = state.widgets.head; node != null; node = node.link){
				this.widgetsToRem.push(node.item);
			}
			for(var node = state.widgets.head; node != null; node = node.link){
				this.widgetsToAdd.push(node.item);
			}
			state.updateWidgets = false;
		}
		
		//println(this.widgetsToRem.length);
		for(var widget = this.widgetsToRem.pop(); widget != null; widget = this.widgetsToRem.pop()){
			if(widget.div.parentNode == display){
				//display.removeChild(widget.div);
				widget.removeFrom();
			}
		}
		//println(this.widgetsToRem.length);
		//println("adding widgets");
		for(var widget = this.widgetsToAdd.pop(); widget != null; widget = this.widgetsToAdd.pop()){
			display.appendChild(widget.div);
		}
	}
}

function updateState(state, params){
	if(state.alwaysUpdate || state == States.current()){
		state.update(params.delta);
	}
}

/**
 * Calls draw on the states in the stack.
 * @param {Drawing Context} ctx The drawing context.
 */
StateManager.prototype.draw = function(ctx){
	this.states.foreach(drawState, {ctx:ctx});
}

function drawState(state, params){
	if(state.alwaysDraw || state == States.current()){
		state.draw(params.ctx);
	}
}

var States = new StateManager();

/**
 * Creates a new instance of State.
 * 
 * @class States allow easy organization of sprites, menus, and other game content into independent groups. Each state can be a different part of the game such as the main menu, the actual game, or the high score screen.
 * Each state has a world sprite to which all game sprites should be added. Each state has its own input object so that input will only be registered for the current state.
 * Each state has two types of GUIs, one sprite based and one HTML widget based.
 * @property {bool} alwaysDraw Should this state draw when it is not on top of the stack.
 * @property {bool} alwaysUpdate Should this state update when it is not on top of the stack.
 * @property {string} bgColor The background color as a hex string.
 * @property {number} collMethod Determines which method will be used to perform collision detection between objects in the phys list Currently. PROXIMITY or GRID.
 * @property {string} cursor Specifies which mouse cursor should be used when this state is active. See here for options http://www.w3schools.com/cssref/pr_class_cursor.asp
 * @property {bool} drawBG Should the background of this state be filled.
 * @property {PostFXChain} effects A post proccess chain that will be applied to this state.
 * @property {GUI} gui A sprite based GUI. Although functional, the HTML based widget system is much more customizable and is better for heavy user input.
 * @property {Input} input State specific input object.
 * @property {List} phys A list of objects that will have collision checks run between them.
 * @property {List<Widget>} widgets A list of widgets that make up this states HTML based GUI.
 * @property {Sprite} world Root sprite for this state. Add all sprites to this.
 */
function State(){
	this.input = new Input();
	
	this.drawBG = false;
	this.bgColor = "#ffffff";
	this.clearColor = [0,0,0,0];

	this.world = new Sprite();
	this.world.x = 0;
	this.world.y = 0;
	this.world.rotation = 0.0;
	this.world.scaleX = 1.0;
	this.world.scaleY = 1.0;
	this.world.draw = function(ctx){
		this.drawChildren(ctx);
	}
	
	this.effects = new PostFXChain();
	
	this.gui = new GUI(this.input);
	this.gui.draw = function(ctx){
		this.drawChildren(ctx);
	}
	
	this.widgets = new List();
	this.updateWidgets = true;
	
	this.phys = new List();
	this.grid = new CollisionGrid(0,0,100,100,2,2);
	this.world.addChild(this.grid);
	this.collMethod = PROXIMITY;
	
	this.cursor = "auto";
	
	this.initialized = false;
}

State.prototype.alwaysUpdate = true;
State.prototype.alwaysDraw = true;
State.prototype.widgets = new List();
State.prototype.world = new Sprite();
State.prototype.effects = new PostFXChain();
State.prototype.gui = new GUI(gInput);
State.prototype.input = gInput;
State.prototype.drawBG = false;
State.prototype.bgColor = "#ffffff";
State.prototype.clearColor = [0,0,0,0];
State.prototype.phys = new List();
State.prototype.grid = new CollisionGrid(0,0,100,100,2,2);
State.prototype.collMethod = PROXIMITY;
State.prototype.cursor = "auto";

State.prototype.init = function(){
	
}

/**
 * Calls update on everything that needs it. Don't override this, override updateState instead.
 * 
 * @param {Object} delta
 */
State.prototype.update = function(delta){
	this.updateState(delta);
	this.world.update(delta);
	this.physics(delta);
	this.gui.update(delta);
	if(canvas != undefined){
		canvas.style.cursor = this.cursor;
	}
	for(var node = this.widgets.head; node != null; node = node.link){
		node.item.update(delta);
	}
}

/**
 * Override this function whereever you are setting up your state and put any code you want to run when the state updates. This function is the first thing to be called when the state updates.
 * 
 * @param {number} delta Time since last update.
 */
State.prototype.updateState = function(delta){
}

//Performs simplistic collision detection between objects added to the phys list. Set the state's collMethod to either PROXIMITY or GRID, default is PROXIMITY
//Objects must have a bounding box object
var PROXIMITY = 0; //Distance based broad phase
var GRID = 1;			//Grid based broad phase
State.prototype.physics = function(delta){
	if(this.collMethod == PROXIMITY){
		for(var first = this.phys.head; first !== null; first = first.link){
			for(var second = first.link; second !== null; second = second.link){
				var collision = false;
				var fItem = first.item;
				var sItem = second.item;
				if((fItem.bbox.solid || sItem.bbox.solid) && !(fItem.static != undefined && sItem.static != undefined)){
					var diff = fItem.pos.sub(sItem.pos);
					if(diff.length < 1000){
					//println(second.item.bbox.getPoints());
						collision = fItem.bbox.checkBBox(sItem.bbox);
						if(collision.occurred){
							//println("checking "+first.item+" against "+second.item);
							fItem.collide(sItem, collision);
							sItem.collide(fItem, collision);
							//collision = true;
						}else{
						//if(!collision && sItem.bbox.checkBBox(fItem.bbox)){
							collision = sItem.bbox.checkBBox(fItem.bbox)
							if(collision.occurred){
								fItem.collide(sItem, collision);
								second.item.collide(fItem, collision);
							}
						}
					}
				}
			}
		}
	}else if(this.collMethod == GRID){
		this.grid.clear();
		for(var first = this.phys.head; first !== null; first = first.link){
			this.grid.insert(first.item);
		}
		for(var i=0; i < this.grid.cells.length; i++){
			var cellList = this.grid.cells[i];
			//println(cellList.length);
			for(var first = cellList.head; first !== null; first = first.link){
				for(var second = first.link; second !== null; second = second.link){
					var collision = false;
					var fItem = first.item;
					var sItem = second.item;
					if((fItem.bbox.solid || sItem.bbox.solid) && !(fItem.static != undefined && sItem.static != undefined)){
						var diff = fItem.pos.sub(sItem.pos);
						if(diff.length < 100){
						//println(second.item.bbox.getPoints());
							collision = fItem.bbox.intersect(sItem.bbox);
							if(collision.occurred){
								fItem.collide(sItem, collision);
								sItem.collide(fItem, collision);
							}
						}
					}
				}
			}
		}
	}
}

/**
 * Fills the background if needed, draws the world, applies post effects, and draws the GUI.
 * @param {Drawing Context} ctx The drawing context.
 */
State.prototype.draw = function(ctx){
	if(this.drawBG){
		if(use2D){
			ctx.fillStyle = this.bgColor;
			ctx.fillRect(0,0,canvas.width,canvas.height);
		}
	}
	
	//Bind and clear the state drawing buffer
	if(!use2D){
		mat4.identity(mvMatrix);
		
		ctx.setBuffer(stateBuffer);
		ctx.viewport(0, 0, ctx.viewportWidth, ctx.viewportHeight);
		ctx.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]);
		ctx.clear(ctx.COLOR_BUFFER_BIT);
	}
	
	//Draw the state's world
	this.world.transform(ctx);
	this.world.draw(ctx);
	this.world.unTransform(ctx);
	
	//Apply post effects to what was just drawn
	if(!use2D){
		this.effects.apply(ctx, stateBuffer);
		
		ctx.useProgram(shaderProgram);
		
		ctx.bindTexTo(stateBuffer.texture, shaderProgram.samplerUniform);
		
		ctx.uniform1f(shaderProgram.alpha, 1.0);
		
		ctx.setBuffer(null);
		
		ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA);
		
		ctx.drawScreenBuffer(shaderProgram);
	}
	
	//Draw the GUI on top of the processed world. This means the GUI doesn't have any effects applied to it
	this.gui.transform(ctx);
	this.gui.draw(ctx);
	this.gui.unTransform(ctx);
}

State.prototype.addWidget = function(widget){
	this.updateWidgets = true;
	this.widgets.push(widget);
	widget.state = this;
}

State.prototype.removeWidget = function(widget){
	this.widgets.remove(widget);
	this.updateWidgets = true;
}