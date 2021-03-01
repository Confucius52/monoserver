import { type, } from "@colyseus/schema"
import { Tile } from "./tile"
import { State } from "../state"
import Player from "../player"

export class Tax extends Tile {
	@type("number")
	fine

	constructor(position, fname, sname, fine) {
		super(position, "Tax", fname, sname);
		this.fine = fine
	}
	
	onLand(state: State) {
		state.getCurrentPlayer().money -= this.fine
	}

}

