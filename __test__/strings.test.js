describe('Comparing text strings', () => {
    const text = "Sint adipisicing do ea id ex eu quis exercitation dolor voluptate."
    test('contains id', () => {
        expect(text).toMatch(/id/);
    });
    test('does not contain soul', () => {
        expect(text).not.toMatch(/soul/);
    });

    test('check the size of a text', () => {
        expect(text).toHaveLength(66);
    });
});