const map = function(list,callBackFunc){
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


module.exports = { map , filter };



