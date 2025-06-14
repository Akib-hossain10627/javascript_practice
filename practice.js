
//reverse an array using for loop
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors);

//Find all even numbers in an array using for loop
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);



//add all the names in an array using for of loop
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';

for (const name of names) {
  result += name;
}

console.log(result);



//Reverse a string using split, reverse and join methods
const statement = 'I am a hard working person';

const reversed = statement.split(' ').reverse().join(' ');

console.log(reversed);


//Take four parameters. Multiply the four numbers and then return the result

function multiply_four_numbers(a, b, c, d){
    return a * b * c * d;
}
const sum = multiply_four_numbers(2, 3, 4, 5);
console.log(sum); 


//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function processNumber(num) {
  if (num % 2 === 0) { 
    return num / 2;
  } else {   
   return num * 2;
  }
}

console.log(processNumber(5)); 
console.log(processNumber(8)); 

//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(arr, size) {
  if (size === 0)
     return 0; 

  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}


const number = [10, 20, 30, 40, 50];
const average = make_avg(number, number.length);
console.log("Average:", average); 

//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
  let count = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '0') {
      count++;
    }
  }
  return count;
}

const binary = "1010010010";
const zeroCount = count_zero(binary);
console.log("Number of 0's:", zeroCount); 


//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 1’s are there in that string.
function count_one(binaryString) {
  let count = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      count++;
    }
  }
  return count;
}

const binary_num = "1111011011";
const oneCount = count_one(binary_num);
console.log("Number of 1's:", oneCount); 


//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number) {
  if (number % 2 === 0) {
    return "Even";
  }
   else {
    return "Odd";
  }
}

console.log(odd_even(4)); 
console.log(odd_even(7));

//leap year 
function  is_leap_year(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}
const year1 = is_leap_year(2043);
console.log(year1); 



//oddnumber+avg

function oddAverage(values){
  const oddNumbers = [];
  for(value of values){
    if(value % 2 === 1){
          // console.log(value);
oddNumbers.push(value);
    }
}
console.log('odd numbers:', oddNumbers);
let sum = 0;
for(odds of oddNumbers){
sum += odds;

}
const count= oddNumbers.length;
const average = sum / count;
console.log('sum of odd numbers:', sum);
return average;
}
const para=[2,4,1,5,7,8];
const my_Value = oddAverage(para);
console.log('average of odd number:',my_Value);


//even-number+avg

function evenAverage(parameters){
  const evenNumbers = [];
  for(param of parameters){
    if(value % 2 === 0){
          // console.log(value);
evenNumbers.push(param);
    }
}
console.log('even numbers:', evenNumbers);
let sum = 0;
for(even of evenNumbers){
sum += even;

}
const count_even= evenNumbers.length;
const average = sum / count_even;
console.log('sum of odd numbers:', sum);
return average;
}
const evens=[2,4,1,5,7,8];
const even_value = evenAverage(evens);
console.log('average of even number:',   even_value);


//finding duplicates

const my_String = [ 'apple', 'banana', 'apple', 'orange', 'banana', 'kiwi', 'kiwi', 'kiwi'];

const my_Array = [1, 2, 3, 4, 5, 1, 2, 3];
function findDuplicates(arr) {
//  console.log('Array:', arr);
const uniqueItems = [];
 for(const item of arr) {
  if (uniqueItems.includes(item)== false) {
    uniqueItems.push(item);
  }
}
return uniqueItems;

}

const duplicates = findDuplicates(my_Array);
console.log('Duplicates:', duplicates);


//Write a function to convert inches to feet.
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// onther version of this one
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.'
    return result;
}

const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);

//Write a function to convert miles
function mileToKilometer (mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const mileToKilo = mileToKilometer(5);
console.log(mileToKilo);

//Write a function to convert kilometers to miles.
function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const kiloToMile = kiloMeterToMiles(8);
console.log(kiloToMile);

//Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
const celsiusToFahr = celsiusToFahrenheit(25);
console.log(celsiusToFahr);

//Write a function to convert temperature from Fahrenheit to Celsius.

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
const fahrenheitToCel = fahrenheitToCelsius(77);
console.log(fahrenheitToCel);


//You are given an array of numbers. Count how many times the a number is repeated in the array.
function countRepeatedNumbers(arr) {
    const count = {};
    for (const num of arr) {
       if (count[num]) {
        count[num]++;
       }
   else{
      count[num]=1;
   }
    }
return count;
  }

const numbersArray = [1, 2, 3, 2, 4, 5, 1, 3, 2,6];
const repeatedCount = countRepeatedNumbers(numbersArray);
console.log(repeatedCount);


//Write a function to count the number of vowels in a string.

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels in "${inputString}":`, vowelCount);

//Write a function to find the longest word in a given string.


function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const inputSentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(inputSentence);
console.log(`Longest word in the sentence: "${inputSentence}" is "${longestWord}"`);


//Generate a random number between 10 to 20.

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = generateRandomNumber(10, 20);
console.log(`Random number between 10 and 20: ${randomNumber}`);
