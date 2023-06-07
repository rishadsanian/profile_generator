const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



const askQuestion = (questions, index = 0, answers = []) => {
  if (index < questions.length) {
    rl.question(questions[index], (answer) => {
      answers.push(answer);
      askQuestion(questions, index + 1, answers);
    });
  } else {
    displayResults(answers);
    rl.close();
  }
};

const displayResults = (answers) => {
  const [name, activity, music, meal, food, sport, superpower] = answers;
  console.log(
    `${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`
  );
};


const questions = [
  `What's your name? Nicknames are also acceptable :) `,
  `What's an activity you like doing? `,
  `What kind of music do you like listening to? `,
  `Which meal is your favorite (e.g., dinner, brunch, etc.)? `,
  `What's your favorite thing to eat for that meal? `,
  `Which sport is your absolute favorite? `,
  `What is your superpower? In a few words, tell us what you are amazing at! `,
];

askQuestion(questions);
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
