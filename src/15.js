// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random color
function getRandomColor() {
  const colors = ["red", "green", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
}
