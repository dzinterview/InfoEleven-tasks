let netPrice = require('../grossToNet');
let assert = require('assert');

describe('netPrice', function () {
    describe('Different vAT value calculate', function () {
        it('should return 220 when gross price is 200 and VAT is 10%', function () {
            assert.equal(netPrice(200, 10), 220); -1
        })
        it('should return 120 when gross price is 200 and VAT is 20%', function () {
            assert.equal(netPrice(100, 20), 120); 
        })
    });
    describe('Check for arguments and NaN value', function () {
        it('should return Please use only numbers or Please enter a number value for VAT when VAT argumetns is empty', function () {
            assert.equal(netPrice(100), "Please use only numbers or Please enter a number value for VAT");
        });
    });
});
