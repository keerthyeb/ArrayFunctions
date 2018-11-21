const assert = require("assert");
const lib = require("../src/arrayFunctionLibrary.js");
const { filter } = lib ;

const isEven = function(number){
  return number % 2 == 0 ;
}

const returnTrue = function(element){
  return true;
}

describe("filter" , function(){
  it(" Test function that return only true",function(){
    assert.deepEqual(filter(returnTrue,[]),[]);
    assert.deepEqual(filter(returnTrue,[1]),[1]);
    assert.deepEqual(filter(returnTrue,[2]),[2]);
    assert.deepEqual(filter(returnTrue,[1,2,3,4,5]),[1,2,3,4,5]);
  });

  it("test function that return both ture and false",function(){
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isEven,[1]),[]);
    assert.deepEqual(filter(isEven,[2]),[2]);
    assert.deepEqual(filter(isEven,[1,2,3,4,5]),[2,4]);
  });
});


