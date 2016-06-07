'use strict';
describe('session', function() {

    beforeEach(module('MyKiwappApp'));

    it('contains spec with an expectation', inject(['session', function(session) {
        expect(session.init()).toBeUndefined();
    }]));
});
