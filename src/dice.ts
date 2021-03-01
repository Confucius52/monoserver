import { type, Schema } from "@colyseus/schema"
import { State } from "./state"

export class Dice extends Schema {
	@type("number") first = 0
	@type("number") second = 0
	consecutiveDoubles = 0

	static fakeRolls: [number, number][] = [[1,2], [2,2], [4,5], [5,3], [2,2], [2,2], [2,2], [2,2], [2,2]];
	static curRoll: number = 0;

	roll(state) {
		state.dice.first = Math.random() * 6 + 1;
		state.dice.second = Math.random() * 6 + 1;

		/* state.dice.first = Dice.fakeRolls[Dice.curRoll][0]; */ 
		/* state.dice.second = Dice.fakeRolls[Dice.curRoll][1]; */ 
		/* ++Dice.curRoll; */

		if (state.getCurrentPlayer().location == 40) {
			if (state.dice.first == state.dice.second) {
				state.getCurrentPlayer().location = (20 + state.dice.first + state.dice.second) % 40;
			}	
			return;
		}

		state.getCurrentPlayer().location += state.dice.first + state.dice.second;
		state.getCurrentPlayer().location %= 40;

		if (state.dice.first == state.dice.second) {
			++state.dice.consecutiveDoubles;	
			if (state.dice.consecutiveDoubles == 3) {
				state.dice.consecutiveDoubles = 0;
				state.getCurrentPlayer().location = 40;
				++state.currentTurn;
				state.currentTurn %= state.playerIds.length;
				state.dice.consecutiveDoubles = 0;
			}
		} else {
			++state.currentTurn;
			state.currentTurn %= state.playerIds.length;
			state.dice.consecutiveDoubles = 0;
		}

		console.log("Roll: ", state.dice.first, state.dice.second);
	}
}
