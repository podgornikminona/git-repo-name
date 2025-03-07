
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomBoolean() {
  return Math.random() >= 0.5;
}

function getRandomElement(array) {
  return array[getRandomNumber(array.length)];
}