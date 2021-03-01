import { type, Schema } from "@colyseus/schema";

export function jail_choice(state, client, message) {
	if (state.getCurrentPlayer().id != client.id || state.currentTurn != "in_jail") return;
	if (message == "pay_money") {
		if (state.getCurrentPlayer().money < 50) return;
		state.getCurrentPlayer().location = 20;
		state.getCurrentPlayer().money -= 50;
		state.dice.roll(state);
	} else if (message == "use_card") {
		if (state.getCurrentPlayer().cards == 0) return;
		state.getCurrentPlayer().location = 20;
		--state.getCurrentPlayer().cards;
		state.dice.roll(state);
	} else {
		state.dice.roll(state);
	}
}
