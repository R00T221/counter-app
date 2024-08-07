/*==============================
    'onclick; ATTRIBUTE
================================
The onclick attribute is an HTML attribute used to specify JavaScript code that should be executed when an element is clicked. It allows you to attach event handlers directly to HTML elements, defining behavior for user interactions such as mouse clicks.
SYNTAX IS;
<button onclick="myFunction()"></button>
To work on the buttons we ist need the intial value of the div which is set to zero so that this value can be incremeneted/decremeneted.So we will fetch the value from html element 'div' having id 'counter' using 'query selector' method.But the query selector method will return it as string and we need to convert the string into an integer value using 'parseInt' function.
===============================
  parseInt() Function
===============================
parseInt() function is used to parse a string and convert it into an integer (a whole number). It takes two parameters: the string to parse and an optional radix (base) specifying the numeral system to be used. If the radix is not specified, the default radix is 10 (decimal).Syntax is:

  parseInt(string, radix);

string: The string to parse into an integer.

radix (optional): An integer between 2 and 36 that represents the radix (base) of the numeral system to be used. If this parameter is omitted, JavaScript assumes the following:
If the string begins with "0x" or "0X", the radix is 16 (hexadecimal).
If the string begins with "0", the radix is 8 (octal).
Otherwise, the radix is 10 (decimal).
EXAMPLES ARE:
const number1 = parseInt('42'); // Without radix (decimal)
console.log(number1); // Output: 42

const number2 = parseInt('1010', 2); // Binary (radix 2)
console.log(number2); // Output: 10

const number3 = parseInt('A', 16); // Hexadecimal (radix 16)
console.log(number3); // Output: 10

const number4 = parseInt('11', 8); // Octal (radix 8)
console.log(number4); // Output: 9



Alternatively, WE can directly access the DECIMAL/INTEGER VALUE using 'valueAsNumber' property of the input element, which returns the numeric value without the need for conversion but this is only possible when the value itself in html element is defined as number:
like <input type="number" id="myNumberInput" value="42">

e:g:-

// Using querySelector to fetch the number input element

const numberInput = document.querySelector('#myNumberInput');

// Accessing the number value as a string

const numberAsString = numberInput.value;

// Converting the string value to a number using valueAsNumber attribute
const numberValue = numberInput.valueAsNumber;
console.log(numberValue); // Output: 42

*/

//FETCHING THE VALUE OF THE ELEMENT.The const countValue stores the element whose id is ;counter'.Thus it will always store/point to that element.
const countValue=document.querySelector('#counter');

// CREATING A increment() FUNCTION as Anonymous function using Arrow function.This Anonymous function is always pointed to by a variable here 'increment".
const increment=()=>{
    let value=countValue.innerText;//Here we are accessing the innerText of the countValue variable which stores the fetched string and store that in 'value' variable."innerText" is a property in JavaScript that allows us to get or set the text content of an element, including its descendants, as a string. 

// Converting the string into a number using parseInt function.
value=parseInt(value);

//Incremeneting the value
value=value+1;
//Setting the new updated value
countValue.innerText=value;
}

//Creating a decrement() function.
const decrement=()=>{
//Accessing the value in countValue variable and placing it in value variable as number using valueAsNumber property
    let value=parseInt(countValue.innerText);
    //Decrement the value
    value=value-1;
    //Update the value back to UI.
    countValue.innerText=value;
}


