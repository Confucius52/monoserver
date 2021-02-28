import { type, Schema } from "@colyseus/schema";

export default class Player extends Schema {
	@type("string") username;
	@type("string") color;
	@type("number") money;
	@type("number")	cards;
	@type("number")	location;
	id;

	constructor(username, id, color, money=200, cards=0, location=0) {
		super();
		this.id = id;
		this.cards = cards;
		this.username = username;
		this.color = color;
		this.money = money;
		this.location = location;
	}
}
