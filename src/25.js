function randomCodeGenerator() {
  // Example JavaScript code using `document.write` to display characters randomly.
  
  // Generate random numbers from 0 to 9 (inclusive)
  const chars = '0123456789'.split('');

  // Generate a random character by index
  const randChar = chars[Math.floor(Math.random() * chars.length)];

  // Convert the character to lowercase
  const lowerCaseChar = randChar.toLowerCase();

  // Return the resulting string as a random code
  return `${lowerCaseChar}`;
}

// Call the function and log the generated code
randomCodeGenerator();
