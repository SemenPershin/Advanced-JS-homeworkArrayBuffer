import { Character } from "./Character"

export class Daemon extends Character {
    constructor(name, type = "Daemon") {
        super(name, type);
        this.baseAttack = 10;
        this.defence = 40;
    }
}