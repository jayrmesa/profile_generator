const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateProfile = () => {
  
  rl.question("What's your name? (Nicknames are also acceptable ^_^) ", (name) => {
    profile["name"] = name;

    rl.question("What's an activity you like doing? ", (hobby) => {
      profile["hobby"] = hobby;

      rl.question("What do you listen to while doing that? ", (music) => {
        profile["music"] = music;

        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (mealtime) => {
          profile["mealtime"] = mealtime;

          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            profile["food"] = food;

            rl.question("Which sport is your absolute favourite? ", (sport) => {
              profile["sport"] = sport;

              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
                profile["power"] = power;
                
                console.log(`Here is ${profile.name} and loves listening to ${profile.music} and loves ${profile.hobby}. Favorite food is ${profile.food} for ${profile.mealtime}, but really prefers ${profile.sport} over any other sports, cause others sucks and super amazing at ${profile.power}. Would you like to be, ${profile.name} friend?`);
                
                rl.close();
              });
            });
          });
        });
      });
    });
      
  });

}

const profile = {};
generateProfile();
