const map = function(callBackFunc,list){
  let outputList = [];
  for(let index = 0 ; index < list.length ; index++ ){
    outputList.push(callBackFunc(list[index]));
  }
  return outputList;
}

const filter = function(callBackFunc,list){
  let outputList = [];
  for(let index = 0 ; index < list.length ; index++){
    if(callBackFunc(list[index])){
      outputList.push(list[index]);
    }
  }
  return outputList;
}

const reduce = function(callBackFunc,list,accumulator){
  let index = 0 ;
  if( accumulator == undefined){
    accumulator = list[0];
    index = 1;
  }
  let output = accumulator ;
  for(; index < list.length ; index++){
    output = callBackFunc(accumulator,list[index]);
    accumulator = output;
  }
  return output;
}

module.exports = { map , filter , reduce };



