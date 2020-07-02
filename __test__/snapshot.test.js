import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('snapshot', () => {
    test('snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
});