import { arrayColors, arrayFruits } from '../arrays';

describe('validate element exists', () => {
    test('Contains a banana', () => {
        expect(arrayFruits()).toContain('banana');
    });

    test('does not contain a bean', () => {
        expect(arrayFruits()).not.toContain('bean');
    });

    test('check the size of an array', () => {
        expect(arrayFruits()).toHaveLength(6);
    });

});