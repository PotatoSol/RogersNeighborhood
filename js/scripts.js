//Business Logic functions

//Takes in a number from the user and returns an array that counts from 0 to that number
function expandInput(userInput){ 
  let returnArray = [];
  for(let i = 0; i < userInput; i++){
    returnArray.push(i);
  }
  return returnArray;
}

function replaceNumber(inputNum){
  let convertedString = inputNum.toString();

  //If a 3 appears in the output, replace it with a string
  if(convertedString.indexOf('3') !== -1){
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

//Takes in a integer...
function calculateResults(userInput){
  let userCalcInput = expandInput(userInput); //Expands that integer (See above)
  let replacedInput = []; //Declares a new array so that we can output it...
  userCalcInput.forEach(ele => replacedInput.push(replaceNumber(ele))); //Runs a loop on the count up array
  calculateNewLines(replacedInput.length); //Passes the new array LENGTH into a method to calculate the number of lines
}

//Takes in a number (the length of our array) so that we can add lines in the UI for each element, then populates them
function calculateNewLines(numOfLines){ 
  for(let i = 0; i <= numOfLines; i++){
    addNewLine(i);
  }
  populateLines(numOfLines);
}

//UI Logic

//Removes previous outputs so that the form can be run multiple times
function clearForms(){
  var answerLines= document.getElementsByClassName('ans');
  while(answerLines[0]){
    answerLines[0].parentNode.removeChild(answerLines[0]);
  }
}

//Adds one new line, with a unique id
function addNewLine(id){
  let lineId = 'line' + id;
  let newLine = document.createElement('li');
  newLine.setAttribute('id', lineId);
  newLine.setAttribute('class', 'ans');
  document.getElementById('outputArea').append(newLine);
} 

//Populates each line that has been added previously based on their unique id
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
  //The number inputed in the field here should be a single integer
  let userInitialInput = parseInt(document.getElementById('numberInputID').value);

  if (!userInitialInput){
    //Catches if the user did not enter an integer before hitting submit
    document.getElementById('flavorText').innerText = "Try putting in an integer instead";

  }else{
    //Uses the user's to continue with the program
    clearForms();
    document.getElementById('flavorText').innerText = "You put in: " + userInitialInput; //Immediately show what the user has input 
    calculateResults(userInitialInput);
  }
}
