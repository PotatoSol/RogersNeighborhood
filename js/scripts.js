//Business Logic functions

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
    convertedString = 'Won\'t you be my neighbor?';
  } else if (convertedString.indexOf('2') !== -1) {
    //replace with 2
    convertedString = 'Boop!';
  } else if (convertedString.indexOf('1') !== -1) {
    //replace with 1
    convertedString = 'Beep!';
  }
  return convertedString;
}

//UI Logic

function addNewLine(id){
  let lineId = 'line' + id;
  let newLine = document.createElement('li');
  newLine.setAttribute('id', lineId);
  document.getElementById('outputArea').append(newLine);
} 


window.addEventListener("load", function(){
  document.getElementById("submitForm").addEventListener("submit", submitButton);
});
function submitButton(event){
  event.preventDefault();
  let userInitialInput = document.getElementById('numberInputID');
}


function mainTest(){
  let userInput = expandInput(10);
  let replacedInput = [];
  userInput.forEach(ele => replacedInput.push(replaceNumber(ele)));
  console.log(replacedInput);
}
mainTest();