import axios from 'axios';
import { getUserAuthorization } from '../exercise';
import rick from '../rick.json';

jest.mock('axios');

describe('testing async methods', () => {
    test('get character', async() => {
        //Arrange
        const id = 1;
        const resp = { data: rick };
        axios.get.mockResolvedValue(resp);
        //Act
        const userAuthorization = await getUserAuthorization(id);
        //Assert
        expect(userAuthorization).not.toEqual(rick);
        expect(userAuthorization.permission).toBeTruthy();
    });
    test('testing that the mock is called', async() => {
        //Arrange
        const id = 1;
        const resp = { data: rick };
        const mock = axios.get.mockResolvedValue(resp);
        //Act
        await getUserAuthorization(id);
        //Assert
        expect(mock).toHaveBeenCalled();
    });

});