import { type, Schema } from "@colyseus/schema";

export default class Player extends Schema {
	@type("string") username;
	@type("string") color;
	@type("number") money;
	@type("number")	cards;
	@type("number")	location;

	constructor(username, color="", money=200, cards=0, location=0) {
		super();
		this.cards = cards;
		this.username = username;
		this.color = color;
		this.money = money;
		this.location = location;
	}
}
