import { Daemon } from "../Daemon";

test('Демон атакует на третью клетку', () => {
    const daemon  = new Daemon("daemon");
    daemon.attack = 3;

    expect(daemon.attack).toBe(8);
});

test('Демон атакует на вторую клетку под дебафом', () => {
    const daemon  = new Daemon("daemon");
    daemon.stoned = 2;

    expect(daemon.stoned).toBe(4);
});
