const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const generateRandomCode = () => {
  const randomNumber = getRandomInt(10);
  let code;
  
  switch (randomNumber) {
    case 1:
      code = "alert('Hello World!');";
      break;
    case 2:
      code = "console.log('Welcome to JavaScript');";
      break;
    case 3:
      code = "const name = prompt('What is your name?');";
      break;
    case 4:
      code = "let age = Number(prompt('How old are you?'));";
      break;
    case 5:
      code = "document.write('The current date and time is: ' + new Date());";
      break;
    case 6:
      code = "const userInput = prompt('Enter a number:');";
      break;
    case 7:
      code = "if (userInput > 0) {";
      code += "  alert('Your input is positive!');";
      code += "} else if (userInput == 0) {";
      code += "  alert('Your input is zero!');";
      code += "} else {";
      code += "  alert('Your input is negative!');";
      code += "}";
      break;
    case 8:
      code = "const number1 = prompt('Enter a number:');";
      code += "const number2 = prompt('Enter another number:');";
      code += "if (number1 > number2) {";
      code += "  alert('The first number is greater than the second!');";
      code += "} else if (number1 == number2) {";
      code += "  alert('The two numbers are equal!');";
      code += "} else {";
      code += "  alert('The first number is less than the second!');";
      code += "}";
      break;
    case 9:
      code = "const number1 = prompt('Enter a number:');";
      code += "const number2 = prompt('Enter another number:');";
      code += "if (number1 > number2) {";
      code += "  alert('The first number is greater than the second!');";
      code += "} else if (number1 == number2) {";
      code += "  alert('The two numbers are equal!');";
      code += "} else {";
      code += "  alert('The first number is less than the second!');";
      code += "}";
      break;
    case 10:
      code = "const name = prompt('What is your name?');";
      code += "alert(`Hello, ${name}!`);";
      break;
    default:
      code = "console.log('You entered a wrong number. Please try again.');";
  }
  
  return code;
}
