const assert = require("assert");
const { reduce } = require("../src/arrayFunctionLibrary.js");

const getGreater = function(num1,num2){
  if(num1>num2){
    return num1;
  }
  return num2;
}

const isElementExist = function(list,number){
  if(list.includes(number)){
    return list;
  }
  return list.concat(number);
}

const concatination = function(text1,text2){
  return text1+text2;
}

describe("reduce",function(){
  it("Test with function that return same dataType",function(){
    assert.deepEqual(reduce(getGreater,[1]),1);
    assert.deepEqual(reduce(getGreater,[1,2,3,2,4,1]),4);
  });

  it("Test with function that return different dataType",function(){
    assert.deepEqual(reduce(isElementExist,[1],[]),[1]);
    assert.deepEqual(reduce(isElementExist,[1,2,3,1,2],[]),[1,2,3]);
    assert.deepEqual(reduce(isElementExist,[2,3,4],[]),[2,3,4]);
  });

  it("Test with array Of string " , function(){
    assert.deepEqual(reduce(concatination,["keerthy"]),"keerthy");
    assert.deepEqual(reduce(concatination,["puli","keerthy"],[]),"pulikeerthy");
  });



});

