import { ArrayBufferConverter, getBuffer } from "../buffer";

test('Работа класса', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    arrayBufferConverter.load(getBuffer());
    arrayBufferConverter.toString();

    expect(typeof arrayBufferConverter.translateString == "string").toBe(true);
});