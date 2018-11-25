const assert = require("assert");
const { map , mapPrime } = require("../src/arrayFunctionLibrary.js");

const identity = function(constant){
  return constant;
}

const square = function(number){
  return number*number;
}

const findLength = function(element){
  return element.length;
}

describe(" Map ", function(){

  it("Should return an empty array if we are giving an empty array",function(){
    assert.deepEqual(map(identity,[]),[]);
    assert.deepEqual(map(square,[]),[]);
    assert.deepEqual(map(findLength,[]),[]);
  });

  it("Should work only if array of one element is given", function(){
    assert.deepEqual(map(identity,[1]),[1]);
    assert.deepEqual(map(square,[3]),[9]);
    assert.deepEqual(map(findLength,["keerthy"]),[7]);
  });

  it("Should work with array of more than one element",function(){ 
    assert.deepEqual(map(identity,[1,2,3,4]),[1,2,3,4]);
    assert.deepEqual(map(square,[1,2,3,4]),[1,4,9,16]);
    assert.deepEqual(map(findLength,["puli","keerthy","athul"]),[ 4 , 7 , 5 ]);
  });

});

describe(" Map using reduce ", function(){

  it("Should return an empty array if we are giving an empty array",function(){
    assert.deepEqual(mapPrime(identity,[]),[]);
    assert.deepEqual(mapPrime(square,[]),[]);
    assert.deepEqual(mapPrime(findLength,[]),[]);
  });

  it("Should work only if array of one element is given", function(){
    assert.deepEqual(mapPrime(identity,[1]),[1]);
    assert.deepEqual(mapPrime(square,[3]),[9]);
    assert.deepEqual(mapPrime(findLength,["keerthy"]),[7]);
  });

  it("Should work with array of more than one element",function(){
    assert.deepEqual(mapPrime(identity,[1,2,3,4]),[1,2,3,4]);
    assert.deepEqual(mapPrime(square,[1,2,3,4]),[1,4,9,16]);
    assert.deepEqual(mapPrime(findLength,["puli","keerthy","athul"]),[ 4 , 7 , 5 ]);
  });

});

