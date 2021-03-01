import { type, Schema } from "@colyseus/schema"

export abstract class Tile {
	@type('number')
	position

	@type('string')
	type

	@type('string')
	full_name: string

	@type('string')
	split_name: string

	constructor(position, type, full_name, split_name) {
		this.position = position;
		this.type = type;
		this.full_name = full_name;
		this.split_name = split_name;
	}

	abstract onLand(state); 
}
