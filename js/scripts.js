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

function calculateResults(userInput){
  let userCalcInput = expandInput(userInput);
  let replacedInput = [];
  userCalcInput.forEach(ele => replacedInput.push(replaceNumber(ele)));
  console.log(replacedInput.length);
  calculateNewLines(replacedInput.length);
}

function calculateNewLines(numOfLines){
  for(let i = 0; i <= numOfLines; i++){
    addNewLine(i);
  }
  populateLines(numOfLines);
}

//UI Logic

function addNewLine(id){
  let lineId = 'line' + id;
  let newLine = document.createElement('li');
  newLine.setAttribute('id', lineId);
  document.getElementById('outputArea').append(newLine);
} 

function populateLines(ids){
  let tempId = '';
  for (let i = 0; i <= ids; i++){
    tempId = 'line' + i;
    document.getElementById(tempId).innerText = replaceNumber(i);
  }
}

window.addEventListener("load", function(){
  document.getElementById("submitForm").addEventListener("submit", submitButton);
});
function submitButton(event){
  event.preventDefault();
  let userInitialInput = parseInt(document.getElementById('numberInputID').value); //should be a single int
  if (!userInitialInput){
    //catch if the user did not input an int
    document.getElementById('flavorText').innerText = "Try putting in an integer instead";
  }else{
    document.getElementById('flavorText').innerText = "You put in: " + userInitialInput;
    calculateResults(userInitialInput);
  }
}
