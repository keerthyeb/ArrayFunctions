const assert = require("assert");
const { map } = require("../src/arrayFunctionLibrary.js");

const identity = function(constant){
  return constant;
}

const square = function(number){
  return number*number;
}

const findLength = function(element){
  return element.length;
}

describe("map", function(){

  it("Testing identity function",function(){
    assert.deepEqual(map(identity,[]),[]);
    assert.deepEqual(map(identity,[3]),[3]);
    assert.deepEqual(map(identity,[1,2,3,4]),[1,2,3,4]);
    assert.deepEqual(map(identity,["constant"]),["constant"]);
  });

  it("Testing function that return same dataType", function(){
    assert.deepEqual(map(square,[]),[]);
    assert.deepEqual(map(square,[3]),[9]);
    assert.deepEqual(map(square,[1,2,3,4]),[1,4,9,16]);
  });

  it("Testing function that return different dataType",function(){ 
    assert.deepEqual(map(findLength,[]),[]);
    assert.deepEqual(map(findLength,["keerthy"]),[7]);
    assert.deepEqual(map(findLength,["puli","keerthy","athul"]),[ 4 , 7 , 5 ]);
  });

});

