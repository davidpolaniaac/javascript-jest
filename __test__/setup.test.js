afterEach(() => console.log('after each test'));
afterAll(() => console.log('after all test'));

beforeAll(() => console.log('before all the tests'));
beforeEach(() => console.log('before each test'));

describe('Test setup', () => {
    test('Is true', () => {
        expect(true).toBeTruthy();
    });
});