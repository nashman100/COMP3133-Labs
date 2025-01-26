const { add, sub, mul, div } = require('../app/calculator');

describe('Calculator Testing', function() {

    let assert;

    before(async function() {
      const chai = await import('chai');
      assert = chai.assert;
    });

    it('add (5,2) expected result 7', function(){
        assert.equal(add(5,2), 7);
    });

    it('add (5,2) expected result 8', function(){
        assert.equal(add(5,2), 8);
    });

    it('sub (5,2) expected result 3', function(){
        assert.equal(sub(5,2), 3);
    });

    it('sub (5,2) expected result 5', function(){
        assert.equal(sub(5,2), 5);
    });

    it('mul (5,2) expected result 10', function(){
        assert.equal(mul(5,2), 10);
    });
    
    it('mul (5,2) expected result 12', function(){
        assert.equal(mul(5,2), 12);
    });

    it('div (5,2) expected result 5', function(){
        assert.equal(div(10,2), 5);
    });

    it('div (5,2) expected result 2', function(){
        assert.equal(div(10,2), 2);
    });
    
});