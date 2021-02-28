import { type, Schema } from "@colyseus/schema"

export class Dice extends Schema {
	@type("number") first = 0
	@type("number") second = 0

	
	
}
