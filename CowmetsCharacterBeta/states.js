var time = 0;

var state1 = new State();
var state2 = new State();
var state3 = new State();

var state_manager = new StateManager();
state_manager.push(state1); // the tail will be the state that is being drawn
state_manager.push(state2);
state_manager.push(state3);

state1.bgColor = "#00ff00";
state2.bgColor = "#ff00ff";
state3.bgColor = "#0000ff";

state1.drawBG = true;
state3.drawBG = true;

state3.alwaysDraw = true;

state_manager.update(time);

state1.update(time);
state2.update(time);
state3.update(time);

if(time > 300)
{
	state_manager.remove(state1);
	time++;
}
if(time > 600)
{
	state_manager.remove(state2);
	time++;
}