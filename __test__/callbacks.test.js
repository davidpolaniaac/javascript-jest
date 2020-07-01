import { callbackHell } from '../callbacks';

describe('testing the callback', () => {
    test('callback', done => {

        function otherCallback(data) {
            expect(data).toBe("Hello Javascripters");
            done();
        }

        callbackHell(otherCallback);

    });
});