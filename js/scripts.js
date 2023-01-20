function expandInput(userInput){
  let returnArray = [];
  for(let i = 0; i <= userInput; i++){
    returnArray.push(i);
  }
  return returnArray;
}

function replaceNumber(inputNum){
  let convertedString = inputNum.toString();
  if(convertedString.indexOf('3') !== -1){
    //replace with 3
    convertedString = 'Found 3';
  } else if (convertedString.indexOf('2') !== -1) {
    //replace with 2
    convertedString = 'Found 2';
  } else if (convertedString.indexOf('1') !== -1) {
    //replace with 1
    convertedString = 'Found 1';
  }
  return parseInt(convertedString);
}




function mainTest(){
  let userInput = expandInput(10);
  let replacedInput = [];
  replacedInput.push(userInput.forEach(ele => replaceNumber(ele)));
  console.log(replacedInput);
}
mainTest();