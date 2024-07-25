import { Magician } from "../Magician";

test('Маг атакует на пятую клетку', () => {
    const magician  = new Magician("magician");
    magician.attack = 5;

    expect(magician.attack).toBe(6);
});

test('Маг атакует на четвертую клетку под дебафом', () => {
    const magician  = new Magician("magician");
    magician.stoned = 4;

    expect(magician.stoned).toBe(-3);
});
