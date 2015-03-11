var gridSingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function gridManager() {
  	
    // Singleton

    return {
      // Public methods and variables
      capacity: 0, 
      
      list: new List(),
      
      
      
      
      
      grid: new CollisionGrid(0, 0, canvas.width, canvas.height, 10, 10),
      
      
      updateGrid: function(items){
      	for(var i = 0; i<items.length;i++)
		this.grid.insert(items.getAt(i));
      },
      
      retrieve: function (item){
      	return this.grid.search(item);
      },
      
      clear: function(){
      	this.grid.clear();
		}
    };
    
    

 
  };
 
 
 
 
 
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = gridManager();
        //instance.init();
        //world.addChild(instance);
      }
 
      return instance;
    }
 
  };
 
})();



















var quadSingleton = (function () {
 
  // Instance stores a reference to the Singleton
  var instance;
 
  function quadManager() {
  	
    // Singleton

    return {
      // Public methods and variables
      capacity: 0, 
      
      list: new Array(),
      tree: new QuadTree(0,0,canvas.width,canvas.height, false, 7,9),
      
      
      updateTree: function(items){
		this.tree.insert(items);
 
      	
      },
      
      retrieve: function (item){
      	return this.tree.retrieve(item);
      },
      
      clear: function(){
      	this.tree.clear();
		}
    };
    
    

 
  };
 
 
 
 
 
 
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = quadManager();
        //instance.init();
        //world.addChild(instance);
      }
 
      return instance;
    }
 
  };
 
})();















function QuadTree(x,y,width,height, pointQuad, maxDepth, maxChildren) {
        var node;
        if (pointQuad) {

            node = new Node(x,y,width,height, 0, maxDepth, maxChildren);
        } else {
            node = new BoundsNode(x,y,width,height, 0, maxDepth, maxChildren);
        }

        this.root = node;
    }

    /**
    * The root node of the QuadTree which covers the entire area being segmented.
    * @property root
    * @type Node
    **/
    QuadTree.prototype.root = null;


    /**
    * Inserts an item into the QuadTree.
    * @method insert
    * @param {Object|Array} item The item or Array of items to be inserted into the QuadTree. The item should expose x, y 
    * properties that represents its position in 2D space.
    **/
    QuadTree.prototype.insert = function (item) {
        if (item instanceof Array) {
            var len = item.length;

            var i;
            for (i = 0; i < len; i++) {
                this.root.insert(item[i]);
            }
        } else {
            this.root.insert(item);
        }
    };

    /**
    * Clears all nodes and children from the QuadTree
    * @method clear
    **/
    QuadTree.prototype.clear = function () {
        this.root.clear();
    };

    /**
    * Retrieves all items / points in the same node as the specified item / point. If the specified item
    * overlaps the bounds of a node, then all children in both nodes will be returned.
    * @method retrieve
    * @param {Object} item An object representing a 2D coordinate point (with x, y properties), or a shape
    * with dimensions (x, y, width, height) properties.
    **/
    QuadTree.prototype.retrieve = function (item) {
        //get a copy of the array of items
        var out = this.root.retrieve(item).slice(0);
        return out;
    };

    /************** Node ********************/


    function Node(x,y,width,height, depth, maxDepth, maxChildren) {
        this.width = width;
		this.height = height;
		this.x=x;
		this.y=y;
        this.children = [];
        this.nodes = [];

        if (maxChildren) {
            this._maxChildren = maxChildren;
        }

        if (maxDepth) {
            this._maxDepth = maxDepth;
        }

        if (depth) {
            this._depth = depth;
        }
    }

    //subnodes
    Node.prototype.nodes = null;
    Node.prototype._classConstructor = Node;

    //children contained directly in the node
    Node.prototype.children = null;
    //Node.prototype._bounds = null;

    //read only
    Node.prototype._depth = 0;

    Node.prototype._maxChildren = 4;
    Node.prototype._maxDepth = 4;

    Node.TOP_LEFT = 0;
    Node.TOP_RIGHT = 1;
    Node.BOTTOM_LEFT = 2;
    Node.BOTTOM_RIGHT = 3;


    Node.prototype.insert = function (item) {
        if (this.nodes.length) {
            var index = this._findIndex(item);

            this.nodes[index].insert(item);

            return;
        }







        this.children.push(item);

        var len = this.children.length;
        if (!(this._depth >= this._maxDepth) &&
                len > this._maxChildren) {
            
            this.subdivide();

            var i;
            for (i = 0; i < len; i++) {
                this.insert(this.children[i]);
            }

            this.children.length = 0;
        }
    };

    Node.prototype.retrieve = function (item) {
        if (this.nodes.length) {
            var index = this._findIndex(item);

            return this.nodes[index].retrieve(item);
        }

        return this.children;
    };

    Node.prototype._findIndex = function (item) {
        
        var left = (item.x > this.x + this.width / 2) ? false : true;
        var top = (item.y > this.y + this.height / 2) ? false : true;

        //top left
        var index = Node.TOP_LEFT;
        if (left) {
            //left side
            if (!top) {
                //bottom left
                index = Node.BOTTOM_LEFT;
            }
        } else {
            //right side
            if (top) {
                //top right
                index = Node.TOP_RIGHT;
            } else {
                //bottom right
                index = Node.BOTTOM_RIGHT;
            }
        }

        return index;
    };


    Node.prototype.subdivide = function () {
    	
        var depth = this._depth + 1;

        var bx = this.x;
        var by = this.y;

        //floor the values
        var b_w_h = (this.width / 2) | 0; //todo: Math.floor?
        var b_h_h = (this.height / 2) | 0;
        var bx_b_w_h = bx + b_w_h;
        var by_b_h_h = by + b_h_h;

        //top left
        this.nodes[Node.TOP_LEFT] = new this._classConstructor(bx, by,b_w_h, b_h_h, depth, this._maxDepth, this._maxChildren);

        //top right
        this.nodes[Node.TOP_RIGHT] = new this._classConstructor(bx_b_w_h,by, b_w_h,b_h_h,depth, this._maxDepth, this._maxChildren);

        //bottom left
        this.nodes[Node.BOTTOM_LEFT] = new this._classConstructor( bx,by_b_h_h, b_w_h,b_h_h, depth, this._maxDepth, this._maxChildren);

        //bottom right
        this.nodes[Node.BOTTOM_RIGHT] = new this._classConstructor(bx_b_w_h, by_b_h_h, b_w_h,b_h_h,depth, this._maxDepth, this._maxChildren);
    };

    Node.prototype.clear = function () {
        this.children.length = 0;

        var len = this.nodes.length;
        
        var i;
        for (i = 0; i < len; i++) {
            this.nodes[i].clear();
        }

        this.nodes.length = 0;
    };
    

    /******************** BoundsQuadTree ****************/

    function BoundsNode(x,y,width,height, depth, maxChildren, maxDepth) {
        Node.call(this,x,y,width,height, depth, maxChildren, maxDepth);
        this._stuckChildren = [];
    }

    BoundsNode.prototype = new Node();
    BoundsNode.prototype._classConstructor = BoundsNode;
    BoundsNode.prototype._stuckChildren = null;

    //we use this to collect and conctenate items being retrieved. This way
    //we dont have to continuously create new Array instances.
    //Note, when returned from QuadTree.retrieve, we then copy the array
    BoundsNode.prototype._out = [];

    BoundsNode.prototype.insert = function (item) {
        if (this.nodes.length) {
            var index = this._findIndex(item);
            var node = this.nodes[index];

            //todo: make _bounds bounds
            if (item.x >= node.x &&
                    item.x + item.width <= node.x + node.width &&
                    item.y >= node.y &&
                    item.y + item.height <= node.y + node.height) {
                
                this.nodes[index].insert(item);
                
            } else {
                this._stuckChildren.push(item);
            }

            return;
        }

        this.children.push(item);

        var len = this.children.length;

        if (!(this._depth >= this._maxDepth) &&
                len > this._maxChildren) {
            
            this.subdivide();

            var i;
            for (i = 0; i < len; i++) {
                this.insert(this.children[i]);
            }

            this.children.length = 0;
        }
    };

    BoundsNode.prototype.getChildren = function () {
        return this.children.concat(this._stuckChildren);
    };

    BoundsNode.prototype.retrieve = function (item) {
        var out = this._out;
        out.length = 0;
        if (this.nodes.length) {
            var index = this._findIndex(item);
            var node = this.nodes[index];

            if (item.x >= node.x &&
                    item.x + item.width <= node.x + node.width &&
                    item.y >= node.y &&
                    item.y + item.height <= node.y + node.height) {
                
                out.push.apply(out, this.nodes[index].retrieve(item));
            } else {
                //Part of the item are overlapping multiple child nodes. For each of the overlapping nodes, return all containing objects.

                if (item.x <= this.nodes[Node.TOP_RIGHT].x) {
                    if (item.y <= this.nodes[Node.BOTTOM_LEFT].y) {
                        out.push.apply(out, this.nodes[Node.TOP_LEFT].getAllContent());
                    }
                    
                    if (item.y + item.height > this.nodes[Node.BOTTOM_LEFT].y) {
                        out.push.apply(out, this.nodes[Node.BOTTOM_LEFT].getAllContent());
                    }
                }
                
                if (item.x + item.width > this.nodes[Node.TOP_RIGHT].x) {//position+width bigger than middle x
                    if (item.y <= this.nodes[Node.BOTTOM_RIGHT].y) {
                        out.push.apply(out, this.nodes[Node.TOP_RIGHT].getAllContent());
                    }
                    
                    if (item.y + item.height > this.nodes[Node.BOTTOM_RIGHT].y) {
                        out.push.apply(out, this.nodes[Node.BOTTOM_RIGHT].getAllContent());
                    }
                }
            }
        }

        out.push.apply(out, this._stuckChildren);
        out.push.apply(out, this.children);

        return out;
    };

    //Returns all contents of node.
    BoundsNode.prototype.getAllContent = function () {
        var out = this._out;
        if (this.nodes.length) {
            
            var i;
            for (i = 0; i < this.nodes.length; i++) {
                this.nodes[i].getAllContent();
            }
        }
        out.push.apply(out, this._stuckChildren);
        out.push.apply(out, this.children);
        return out;
    };

    BoundsNode.prototype.clear = function () {

        this._stuckChildren.length = 0;

        //array
        this.children.length = 0;

        var len = this.nodes.length;

        if (!len) {
            return;
        }

        var i;
        for (i = 0; i < len; i++) {
            this.nodes[i].clear();
        }

        //array
        this.nodes.length = 0;

        //we could call the super clear function but for now, im just going to inline it
        //call the hidden super.clear, and make sure its called with this = this instance
        //Object.getPrototypeOf(BoundsNode.prototype).clear.call(this);
    };


























/*
previous beginning implementation of our qt




function Node(width,height,x,y){
	
	this.state = "leaf";

	
	// bounds
	this.width = width;
	this.height = height;
	this.x=x;
	this.y=y;
	
	
	this.container = new List();
	this.childs = [4];
	
	
}
Node.tL = 0;
Node.tR = 1;
Node.bL = 2;
Node.bR = 3;
Node.loadMax=5;





Node.prototype.insert = function (item) {
    if (this.state = "parent") {
        var index = this.findIndex(item);

        this.nodes[index].insert(item);

        return;
    }

    this.container.push(item);
    
    var len = this.container.length;
    if (len > this.loadMax) {
        
        this.split();
        for (var i = 0; i < len; ++i) {
            this.insert(this.children[i]);
        }
    }
};

Node.prototype.getItem = function (item){
	if(this.state = "parent"){
		var index = this.findIndex(item);
		return this.childs[index].getItem(item);
	}
	
	
	//currently returns list of where it should be
	return this.childs;
}

//asume item is sprite, will have .x, .y, .width, .height
Node.prototype.findIndex = function(item){
	var left = (item.x > this.x + this.width / 2) ? false : true;
    var top = (item.y > this.y + this.height / 2) ? false : true;
    
    
    var index = Node.tL;
        if (left) {
            //left side
            if (!top) {
                //bottom left
                index = Node.bL;
            }
        } else {
            //right side
            if (top) {
                //top right
                index = Node.tR;
            } else {
                //bottom right
                index = Node.bR;
            }
        }

        return index;
}

//to be used for multiple occupation of object
Node.prototype.findIndexes = function(item){
	var left = (item.x > this.x + this.width / 2) ? false : true;
    var top = (item.y > this.y + this.height / 2) ? false : true;
}

 Node.prototype.clear = function () {
        if(this.state == "parent"){
        	for (var i = 0; i < 4; i++) {
            	this.childs[i].clear();
        	}
        }else{
        	this.container.clear();
        }

    };


Node.prototype.split = function(){
	this.state = "parent";
	this.childs[this.tL] = new Node(this.x,this.y,this.width/2,this.height/2);
	this.childs[this.tR] = new Node(this.x+this.width/2,this.y,this.width/2,this.height/2);
	this.childs[this.bL] = new Node(this.x,this.y+this.height/2,this.width/2,this.height/2);
	this.childs[this.bR] = new Node(this.x+this.width/2,this.y+this.height/2,this.width/2,this.height/2);
	
}

function QuadTree(){
	//this.loadMax = loadMax;
	
	this.rood = new Node(canvas.width,canvas.height,0,0,0);
	
}
*/









function testOb(x,y,w,h){
	this.isColliding = false;
	this.lifetime =0;
	this.vel = 2;
	Sprite.call(this);

    this.width = w;
    this.height = h;
    
    this.xoffset = -this.width/2;
	this.yoffset = -this.height/2;
    this.x = x;
    this.y = y;
    
    this.image = Textures.load("http://www.colorhexa.com/ff0000.png");
    this.isColliding = false;
    world.addChild(this);
};

testOb.prototype = new Sprite();

