import { Daemon } from "../Daemon";

test('Демон атакует на третью клетку', () => {
    const daemon  = new Daemon("daemon");
    daemon.stoned = false;
    daemon.range = 3;
    daemon.attack = daemon.baseAttack;

    expect(daemon.attack).toBe(8);
});

test('Демон атакует на вторую клетку под дебафом', () => {
    const daemon  = new Daemon("daemon");
    daemon.stoned = true;
    daemon.range = 2;
    daemon.attack = daemon.baseAttack;

    expect(daemon.attack).toBe(4);
});
