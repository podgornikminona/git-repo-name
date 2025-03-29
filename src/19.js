function getRandomString(length) {
  let result = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const specialCharacters = '!@#$%^&*()';

  for (let i = 0; i < length; i++) {
    result += letters[Math.floor(Math.random() * letters.length)] +
              digits[Math.floor(Math.random() * digits.length)] +
              specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  return result;
}

console.log(getRandomString(10));
