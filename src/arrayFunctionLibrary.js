const map = function(mapper,list){
  let outputList = [];
  for(let index = 0 ; index < list.length ; index++ ){
    outputList.push(mapper(list[index]));
  }
  return outputList;
}

const filter = function(predicate,list){
  let outputList = [];
  for(let index = 0 ; index < list.length ; index++){
    if(predicate(list[index])){
      outputList.push(list[index]);
    }
  }
  return outputList;
}

const reduce = function(reducer,list,accumulator){
  let index = 0 ;
  if( accumulator == undefined){
    accumulator = list[0];
    index = 1;
  }
  let output = accumulator ;
  for(; index < list.length ; index++){
    output = reducer(accumulator,list[index]);
    accumulator = output;
  }
  return output;
}

module.exports = { map , filter , reduce };



