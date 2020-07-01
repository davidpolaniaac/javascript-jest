import { getDataFromApi } from '../promise';

describe('testing promises', () => {
    test('making a request to an api', done => {

        const api = 'https://rickandmortyapi.com/api/character/'
        getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    test('Solve hello', () => {
        return expect(Promise.resolve('Hello!')).resolves.toBe('Hello!');
    });

    test('Reject error', () => {
        return expect(Promise.reject('Error!')).rejects.toBe('Error!');
    });

});