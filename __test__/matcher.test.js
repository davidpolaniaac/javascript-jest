describe('Common comparators', () => {
    const user = {
        name: "David",
        lastname: "Polania"
    };

    const user2 = {
        name: "David",
        lastname: "Polania"
    };

    const user3 = {
        name: "Davie",
        lastname: "Polania"
    };

    test('equality of elements', () => {
        expect(user).toEqual(user2);
    });

    test('element inequality', () => {
        expect(user).not.toEqual(user3);
    });
});