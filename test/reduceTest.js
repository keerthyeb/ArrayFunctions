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
  it("Should work with array of length one",function(){
    assert.deepEqual(reduce(getGreater,[1]),1);
    assert.deepEqual(reduce(concatination,["keerthy"]),"keerthy");
  });

  it("Should work with array of length more than one",function(){
    assert.deepEqual(reduce(getGreater,[1,2,3,2,4,1]),4);
    assert.deepEqual(reduce(concatination,["puli","keerthy"],[]),"pulikeerthy");
  });

  it("Should support accumulator ", function(){
    assert.deepEqual(reduce(isElementExist,[1],[]),[1]);
    assert.deepEqual(reduce(isElementExist,[1,2,3,1,2],[]),[1,2,3]);
    assert.deepEqual(reduce(isElementExist,[2,3,4],[]),[2,3,4]);
  });

});

