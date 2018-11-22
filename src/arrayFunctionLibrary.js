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
  if(list.length == 1){
    if( accumulator == undefined){
      return list[0];
    }
    return reducer(accumulator,list[0]);
  }

  return reducer(reduce(reducer,list.slice(0,list.length-1),accumulator),list[list.length-1]);
}

module.exports = { map , filter , reduce };



