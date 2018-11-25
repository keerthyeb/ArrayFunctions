const assert = require("assert");
const { filter , filterPrime } = require("../src/arrayFunctionLibrary.js");

const isEven = function(number){
  return number % 2 == 0 ;
}

const truthify = function(element){
  return true;
}

describe("filter" , function(){
  it("Should return an empty array if we are giving an empty array",function(){
    assert.deepEqual(filter(truthify,[]),[]);
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(() => false,[]),[]);
  });

  it("Should work only if array of one element is given",function(){
    assert.deepEqual(filter(truthify,[1]),[1]);
    assert.deepEqual(filter(isEven,[1]),[]);
    assert.deepEqual(filter(isEven,[2]),[2]);
    assert.deepEqual(filter(() => false,[4]),[]);
  });

  it("Should workwith array of mor than one element",function(){
    assert.deepEqual(filter(truthify,[1,2,3,4,5]),[1,2,3,4,5]);
    assert.deepEqual(filter(isEven,[1,2,3,4,5]),[2,4]);
    assert.deepEqual(filter(() => false , [1,2,3,4]),[]);
  });
});

describe("filter using reduce" , function(){
  it("Should return an empty array if we are giving an empty array",function(){
    assert.deepEqual(filterPrime(truthify,[]),[]);
    assert.deepEqual(filterPrime(isEven,[]),[]);
    assert.deepEqual(filterPrime(() => false,[]),[]);
  });

  it("Should work only if array of one element is given",function(){
    assert.deepEqual(filterPrime(truthify,[1]),[1]);
    assert.deepEqual(filterPrime(isEven,[1]),[]);
    assert.deepEqual(filterPrime(isEven,[2]),[2]);
    assert.deepEqual(filterPrime(() => false,[4]),[]);
  });

  it("Should workwith array of mor than one element",function(){
    assert.deepEqual(filterPrime(truthify,[1,2,3,4,5]),[1,2,3,4,5]);
    assert.deepEqual(filterPrime(isEven,[1,2,3,4,5]),[2,4]);
    assert.deepEqual(filterPrime(() => false , [1,2,3,4]),[]);
  });
});


