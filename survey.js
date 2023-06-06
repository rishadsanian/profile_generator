const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  console.log(`Name: ${name}`);
  rl.question(`What's an activity you like doing? `, (activity) => {
    console.log(`Favorite Activity: ${activity}`);
    rl.question(`What kind of music do you like listening to? `, (music) => {
      console.log(`Favorite Music: ${music}`);
      rl.question(
        `Which meal is your favorite (e.g., dinner, brunch, etc.)? `,
        (meal) => {
          console.log(`Favorite Meal: ${meal}`);
          rl.question(
            `What's your favorite thing to eat for that meal? `,
            (food) => {
              console.log(`Favorite Food for ${meal}: ${food}`);
              rl.question(
                `Which sport is your absolute favorite? `,
                (sport) => {
                  console.log(`Favorite Sport: ${sport}`);
                  rl.question(
                    `What is your superpower? In a few words, tell us what you are amazing at! `,
                    (superpower) => {
                      console.log(`Superpower: ${superpower}`);

                      console.log(
                        name +
                          " loves listening to " +
                          music +
                          ", devouring " +
                          food +
                          " for " +
                          meal +
                          ", prefers " +
                          sport +
                          " over any other sport, and is amazing at " +
                          superpower +
                          "."
                      );
                      //Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
