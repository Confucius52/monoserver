import { Room, Client } from "colyseus";
import { State } from "./state";
import Player from "./player";
import { jail_choice } from "./jail";

export enum ISituation {
    in_jail = "in_jail",
    lobby = "lobby",
    dice = "waiting_for_dice_roll",
    buy_or_auction = "buy_or_auction",
    auction = "auction",
    tax = "tax",
    special = "special"
}

export class MyRoom extends Room {

	onCreate (options: any) {
		this.maxClients = 2;
		this.setState(new State());

		this.onMessage("roll_dice", (client, message) => {
			// console.log(message);
			if (this.state.getCurrentPlayer().id != client.id || this.state.currentSituation != ISituation.dice) return;	
			this.state.dice.roll(this.state);
		});

		this.onMessage("jail", (client, message) => {
			jail_choice(this.state, client, message);	
		});

	}

	onJoin (client: Client, options: any) {
		this.state.addPlayer(client.id, options.username);
		if (this.state.playerIds.length == this.maxClients) {
			this.state.currentSituation = "waiting_for_dice_roll";
		}
	}

	onLeave (client: Client, consented: boolean) {
	}

	onDispose() {
	}

}
