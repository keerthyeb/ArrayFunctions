const assert = require("assert");
const lib = require("../src/arrayFunctionLibrary.js");
const { map } = lib ;

const identity = function(constant){
  return constant;
}

const testMap = function(){
  assert.deepEqual(map([],identity),[]);
  assert.deepEqual(map([3],identity),[3]);
  assert.deepEqual(map([1,2,3,4],identity),[1,2,3,4]);
  assert.deepEqual(map(["constant"],identity),["constant"]);
}

const runTests = function(){
  testMap();
  console.log("testMap passed");
}
runTests();
