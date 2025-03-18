function getRandomCode() {
  // Generate a random number between 1 and 10
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  // Return the corresponding code based on the random number
  if (randomNumber === 1) {
    return "The quick brown fox jumps over the lazy dog.";
  } else if (randomNumber === 2) {
    return "Pack my box with five dozen liquor jugs.";
  } else if (randomNumber === 3) {
    return "How vexingly quick time passes for a boy who loves books.";
  } else if (randomNumber === 4) {
    return "The sixth sick sheik's six sheep's sick.";
  } else if (randomNumber === 5) {
    return "Jalapeno pockets.";
  } else if (randomNumber === 6) {
    return "Eight miles high, my fellow, eight miles high.";
  } else if (randomNumber === 7) {
    return "Sphinx of black quartz, judge my vow.";
  } else if (randomNumber === 8) {
    return "Time is an illusion. Lunchtime dollars.";
  } else if (randomNumber === 9) {
    return "The quick brown fox jumps over the lazy dog.";
  } else {
    return "Pack my box with five dozen liquor jugs.";
  }
}
