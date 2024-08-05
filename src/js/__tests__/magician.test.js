import { Magician } from "../Magician";

test('Маг атакует на пятую клетку', () => {
    const magician  = new Magician("magician");
    magician.stoned = false;
    magician.range = 5;
    magician.attack = magician.baseAttack;
    
    expect(magician.attack).toBe(6);
});

test('Маг атакует на четвертую клетку под дебафом', () => {
    const magician  = new Magician("magician");
    magician.stoned = true
    magician.range = 4;
    magician.attack = magician.baseAttack;

    expect(magician.attack).toBe(-3);
});
