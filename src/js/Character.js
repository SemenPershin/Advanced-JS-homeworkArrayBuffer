export class Character {
    constructor(name, type) {

        const conditionName = typeof name == "string" && name.length >= 2 && name.length <= 10;
        const conditionType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type);

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.baseAttack = undefined;
        this.defence = undefined;
    }

    set attack(range) {
        this._attack =  this.baseAttack * (1 - (range - 1) / 10) - this.stoned * (Math.log2(range) * 5);
    }
    get attack() {
        return this._attack;
    }

    set stoned (isStoned) {
        if (isStoned) {
            this._stoned = 1;
        } else {
            this._stoned = 0;
        }
        
    }
    get stoned () {
        return this._stoned
    }

}