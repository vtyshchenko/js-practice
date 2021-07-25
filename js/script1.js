const words = ["кіт", "собака", "пес", "автобус", "літак"];
let word = words[Math.floor(Math.random() * words.length)];

const answers = [];
for (let i = 0; i < word.length; i += 1) {
  answers.push("-");
}
// console.log(answers);
let remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(answers.join(" "));

  let guess = prompt("Вгадайте букву");
  guess = guess.toLowerCase();
  if (guess === null) {
    break;
  } else if (guess.length > 1) {
    alert("Введіть тільки одну букву");
  } else {
    for (let i = 0; i < word.length; i += 1) {
      if (word[i] === guess) {
        answers[i] = guess;
        remainingLetters -= 1;
      }
    }
  }
}
alert("Вгадано слово ${word}");
