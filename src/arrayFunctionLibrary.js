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
  if( accumulator == undefined){
    accumulator = list.shift();
  }

  if(list.length > 0){
    accumulator = reducer(accumulator,list[0]);
    accumulator = reduce(reducer,list.slice(1),accumulator);
  }
  return accumulator;
}

module.exports = { map , filter , reduce };



