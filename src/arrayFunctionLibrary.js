const map = function(list,callBackFunc){
  let outputList = [];
  for(let index = 0 ; index < list.length ; index++ ){
    outputList.push(callBackFunc(list[index]));
  }
  return outputList;
}

module.exports = { map };


      
