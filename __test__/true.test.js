import { isNull, isTrue, isFalse, isUndefied } from '../true';

describe('null results tests', () => {
    test('Is null ', () => {
        expect(isNull()).toBeNull();
    });
});

describe('results tests truthy', () => {
    test('Is true ', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('results tests Falsy', () => {
    test('Is false ', () => {
        expect(isFalse()).toBeFalsy();
    });

    test('Is not true ', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});

describe('results tests Undefined', () => {
    test('Is false ', () => {
        expect(isUndefied()).toBeUndefined();
    });
});