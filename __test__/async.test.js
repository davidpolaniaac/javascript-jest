import { getDataFromApi } from '../promise';

describe('testing async ', () => {
    test('making a request to an api', async() => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });

    test('failed request to an api', async() => {
        const apiError = 'https://httpstat.us/404';
        const request = getDataFromApi(apiError);

        await expect(request).rejects.toEqual(Error('Request failed with status code 404'));
    });

    test('Solve or reject hello', async() => {
        await expect(Promise.resolve('hello')).resolves.toBe('hello');
        await expect(Promise.reject('error')).rejects.toBe('error');
    });
});