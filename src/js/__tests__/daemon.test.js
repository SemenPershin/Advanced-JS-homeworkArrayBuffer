import { Daemon } from "../Daemon";

test('Демон атакует на третью клетку', () => {
    const daemon  = new Daemon("daemon");
    daemon.stoned = false;
    daemon.attack = 3;

    expect(daemon.attack).toBe(8);
});

test('Демон атакует на вторую клетку под дебафом', () => {
    const daemon  = new Daemon("daemon");
    daemon.stoned = true;
    daemon.attack = 2;

    expect(daemon.attack).toBe(4);
});
