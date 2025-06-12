const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors);


const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);




var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';

for (const name of names) {
  result += name;
}

console.log(result);




const statement = 'I am a hard working person';

const reversed = statement.split(' ').reverse().join(' ');

console.log(reversed);
