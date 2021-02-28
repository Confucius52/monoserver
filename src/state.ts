import { type, Schema, MapSchema, ArraySchema } from "@colyseus/schema";
import { Dice } from "./dice";
import Player from "./player";

export class State extends Schema {
	@type({map : Player})
	players = new MapSchema<Player>();
	
	@type([ "string" ])
	playerIds = new ArraySchema<string>();

	@type(Dice)
	dice = new Dice();

	@type("number") 
	currentTile = 0

	@type("string")
	currentSituation = "lobby"

	@type("string")
	currentSpecialDescription = ""

	@type("number")
	currentTurn = 0

	// @type(Tiles)
	// tiles = new Tiles()

	// @type(Auction)
	// auction = new Auction()
	
	static fakeRolls : [[number, number]] = [[1,2]];
	static curRoll : number = 0;

	constructor() {
		super();
	}

	roll() {
		// this.dice.first = Math.random() * 6 + 1;
		// this.dice.second = Math.random() * 6 + 1;

		this.dice.first = State.fakeRolls[State.curRoll][0]; 
		this.dice.second = State.fakeRolls[State.curRoll][1]; 
		++State.curRoll;

		if (this.dice.first == this.dice.second) {
			++this.dice.consecutiveDoubles;	
			if (this.dice.consecutiveDoubles == 3) {
				this.players[this.playerIds[this.currentTurn]].currentTile = 40;
				this.dice.consecutiveDoubles = 0;
			}
		} else {
			++this.currentTurn;
			this.currentTurn %= this.playerIds.length;
			this.dice.consecutiveDoubles = 0;
		}

		console.log("Roll: ", this.dice.first, this.dice.second);
	}
}



