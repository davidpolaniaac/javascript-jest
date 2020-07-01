import { add, multiply, subtract, divide } from "../math";

describe('Mathematical calculations', () => {

    test('sum tests', () => {

        expect(add(1, 1)).toBe(2);

    });

    test('Multiply tests', () => {

        expect(multiply(1, 1)).toBe(1);

    });
});