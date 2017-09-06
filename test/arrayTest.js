var assert = chai.assert;

describe('Array', function(){ // describe is used to group individual tests
  it('should start empty', function(){
    // implement test here
    var arr = [];

    assert.equal(arr.length, 0, 'Fiddlesticks! Array length was not 0'); // actual value, expected value, message(on test failure)
  });

  // we can have more it blocks here...
});