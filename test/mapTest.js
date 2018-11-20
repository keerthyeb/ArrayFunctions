const assert = require("assert");
const lib = require("../src/arrayFunctionLibrary.js");
const { map } = lib ;

const identity = function(constant){
  return constant;
}

const square = function(number){
  return number*number;
}

describe("map", function(){

  it("Testing identity function",function(){
    assert.deepEqual(map([],identity),[]);
    assert.deepEqual(map([3],identity),[3]);
    assert.deepEqual(map([1,2,3,4],identity),[1,2,3,4]);
    assert.deepEqual(map(["constant"],identity),["constant"]);
  });

  it("Testing function that return same dataType", function(){
    assert.deepEqual(map([],square),[]);
    assert.deepEqual(map([3],square),[9]);
    assert.deepEqual(map([1,2,3,4],square),[1,4,9,16]);
  });

});

