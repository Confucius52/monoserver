import { type, Schema } from "@colyseus/schema";

export function jail_choice(state, client, message) {
	if (message == "jail_pay") {
		if (state.getCurrentPlayer().money < 50) return;
		state.getCurrentPlayer().location = 20;
		state.getCurrentPlayer().money -= 50;
		state.dice.roll(state);
	} else if (message == "jail_free") {
		if (state.getCurrentPlayer().cards == 0) return;
		state.getCurrentPlayer().location = 20;
		--state.getCurrentPlayer().cards;
		state.dice.roll(state);
	} else {
		if (state.getCurrentPlayer().id != client.id || state.currentTurn != "in_jail") return;
		state.dice.roll(state);
	}
}
