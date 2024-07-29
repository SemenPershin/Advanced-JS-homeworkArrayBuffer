import { Character } from "./Character"

export class Magician extends Character {
    constructor(name, type = "Magician") {
        super(name, type);
        this.baseAttack = 10;
        this.defence = 40;
    }

  
}