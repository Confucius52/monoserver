"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
const schema_1 = require("@colyseus/schema");
const dice_1 = require("./dice");
const player_1 = __importDefault(require("./player"));
class State extends schema_1.Schema {
    constructor() {
        super();
        this.players = new schema_1.MapSchema();
        this.playerIds = new schema_1.ArraySchema();
        this.dice = new dice_1.Dice();
        this.currentTile = 0;
        this.currentSituation = "lobby";
        this.currentSpecialDescription = "";
        this.currentTurn = 0;
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
        }
        else {
            ++this.currentTurn;
            this.currentTurn %= this.playerIds.length;
            this.dice.consecutiveDoubles = 0;
        }
        console.log("Roll: ", this.dice.first, this.dice.second);
    }
}
// @type(Tiles)
// tiles = new Tiles()
// @type(Auction)
// auction = new Auction()
State.fakeRolls = [[1, 2]];
State.curRoll = 0;
__decorate([
    schema_1.type({ map: player_1.default })
], State.prototype, "players", void 0);
__decorate([
    schema_1.type(["string"])
], State.prototype, "playerIds", void 0);
__decorate([
    schema_1.type(dice_1.Dice)
], State.prototype, "dice", void 0);
__decorate([
    schema_1.type("number")
], State.prototype, "currentTile", void 0);
__decorate([
    schema_1.type("string")
], State.prototype, "currentSituation", void 0);
__decorate([
    schema_1.type("string")
], State.prototype, "currentSpecialDescription", void 0);
__decorate([
    schema_1.type("number")
], State.prototype, "currentTurn", void 0);
exports.State = State;
