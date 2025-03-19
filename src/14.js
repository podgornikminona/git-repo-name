
const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const getRandomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[getRandomNumber()];
};

const getRandomWord = () => {
  const word = "";
  for (let i = 0; i < 5; i++) {
    word += getRandomLetter();
  }
  return word;
};

const getRandomWords = () => {
  const words = [];
  for (let i = 0; i < 10; i++) {
    words.push(getRandomWord());
  }
  return words;
};