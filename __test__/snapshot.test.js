import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('snapshot', () => {
    test('snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('snapshot exceptions', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
            name: "David"
        }

        expect(user).toMatchSnapshot({
            id: expect.any(Number),
            createAt: expect.any(Date)
        });
    });
});