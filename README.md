# _Mr.Roger's Neighborhood_

#### By _**Michael Sol**_

#### _Counts up to a inputed number, with some changes_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _GIT_

## Description

_This program takes in a number that is given by the user and then counts up to it, displaying each number on a new line.  However, if a number contains a 1, 2, or 3, it changes the output to something different.  A 3 in the number changes it to "Won't you be my neighbor?", a 2 changes it to "Boop!" and a 1 changes it to "Beep!"  Noteably, a number containing two or three of these integers (i.e. 23) will only do one of the replacements.  (23 will become "Won't you be my neighbor?")_

## Setup/Installation Requirements

* _Click on index.html_
* _Put a integer into the input field_
* _Click the submit button_

## Known Bugs

* _A non-integer number will be accepted, but any decimals will be truncated. While the behavior is correct, there is no message indicating that decimals were truncated.  This may be added in the future_

## Tests

Describe: replaceNumber()

Test: "It should capture that a 1 is found when 1 is inputed"
Code: replaceNumber(1);
Expected Output: 1 "Found a 1" 

Test: "It should capture that 1 is found and write "Beep!"
Code: replaceNumber(1);
Expected Output: "Beep!" 

Test: "It should capture that 2 is found and write "Boop!"
Code: replaceNumber(2);
Expected Output: "Beep!" 

Test: "It should capture that 3 is found and write "Won't you be my neighbor?"
Code: replaceNumber(3);
Expected Output: "Beep!" 

Test: "It should take in and return a 7"
Code: replaceNumber(7);
Expected Output: 7 

Describe: expandInput()

Test: "It should take in 4 and count up to it"
Code: expandInput(4);
Expected Output: [0, 1, 2, 3, 4]

Describe: calculateNewLines()

Test: "It should see that there are 4 items in the array and call the function to make a new line 4 times"
code: calculateNewLines(4);
Expected Output: "addNewLines called!" "addNewLines called!" "addNewLines called!" "addNewLines called!" 


## License

_Email Michael with any questions_

Copyright (c) _1/20/23_ _Michael Sol_