var doThisPlease = function()
{
		var Pcondition = false;
		var pressedP = false;
		
		var state1 = new State();
		var state2 = new State();
		var state3 = new State();
		
		var PauseBox = new TextBox();
		PauseBox.x = 450;
		PauseBox.y = 450;
		PauseBox.offsetX = -PauseBox.width / 2;
		PauseBox.offsetY = -PauseBox.height / 2;
		PauseBox.fontSize = 40;
		PauseBox.text = "Paused";
		
		//p
		gInput.addBool(80, "Pause");
		
		var state_manager = new StateManager();
		state_manager.push(state3); 	// the tail will be the state that is being drawn
		//state_manager.push(state2);
		state_manager.push(state1);
		
		state1.bgColor = "#00ff00";
		state2.bgColor = "#ff00ff";
		state3.bgColor = "#ffffff";
		
		
		state1.drawBG = true;
		state2.drawBG = true;
		state3.drawBG = true;
		
		state3.world.addChild(PauseBox);
		
		var front_to_back = function(StateManager)
		{
			var temp_state = StateManager.pop();
			StateManager.push_front(temp_state);
		}
		
		var back_to_front = function(StateManager)
		{
			StateManager.push(StatesManager.states.pop_front());
		}
		/*
		StateManager.prototype.onKeyDown = function(key)
		{
			if(gInput.Pause && this.pressedP == false)
			{
				console.log("p was pressed.");
				this.pressedP = true;
				return true;
			}
			return false;
		};
		
		StateManager.prototype.onKeyUp = function(key)
		{
			if(gInput.Pause && this.pressedP == true)
			{
				this.pressedP = false;
			}
		};
		
		gInput.addKeyboardListener(StateManager);
		*/
}




var loopThisPlease = function()
{
			if(Pcondition)
			{
				state_manager.remove(state1);
				state_manager.push_front(state1);
			}
			if(!Pcondition)
			{
				state_manager.remove(state3);
				state_manager.push_front(state3);
			}
	
	
	
}
