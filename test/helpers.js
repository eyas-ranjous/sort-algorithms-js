var expect = require('chai').expect,
    swap = require('../lib/helpers/swap'),
    getMiddle = require('../lib/helpers/getMiddle'),
    convertArrayToHeap = require('../lib/helpers/convertArrayToHeap');


describe('sort helpers test', function() {

    it('swap test', function() {
        var a = [0, 5, 2, -5, 1];
        swap(a, 0, 3);
        expect(a.length).to.be.equal(5);
        expect(a[0]).to.be.equal(-5);
        expect(a[3]).to.be.equal(0);
    });

    it('getMiddle test', function() {
        expect(getMiddle(7, 16)).to.be.equal(11);
        expect(getMiddle(4, 8)).to.be.equal(6);
    });

    it('convertArrayToHeap test', function() {
        var a = [1, 2, 3, 4, 5, 6, 7];
        convertArrayToHeap(a);
        expect(a).to.be.eql([7, 4, 6, 1, 3, 2, 5]);
    });

});