const map = function(mapper,list){
  let outputList = [];
  for(element of list){
    outputList.push(mapper(element));
  }
  return outputList;
}

const filter = function(predicate,list){
  let outputList = [];
  for(element of list){
    if(predicate(element)){
      outputList.push(element);
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



