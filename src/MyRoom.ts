import { Room, Client } from "colyseus";
import { State } from "./state";
import Player from "./player";

export class MyRoom extends Room {

	onCreate (options: any) {
		this.maxClients = 2;
		this.setState(new State());

		this.onMessage("roll_dice", (client, message) => {
			this.state.roll();
		});
	}

	onJoin (client: Client, options: any) {
		this.state.playerIds.push(client.id);
		this.state.players.set(client.id, new Player(options.username));
	}

	onLeave (client: Client, consented: boolean) {
	}

	onDispose() {
	}

}
