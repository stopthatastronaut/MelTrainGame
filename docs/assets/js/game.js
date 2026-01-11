/*
Game phases:

setup
preload
deal
check
offer
*/

const debug_mode = false;

function play_the_game() {
  // set up our gameboard
  Alpine.store('game_data').outcome = ''
  const stations = Alpine.store('game_data').data.stations;
  const randomised = stations.sort(() => 0.5 - Math.random());

  // choose our pieces by choosing four, nominating the first as our target, then shuffling again
  const choices = randomised.slice(0,4);
  const targetstation = choices[0];
  var shuffled = choices.sort(() => 0.5 - Math.random());

  // shuffle the lines on that object, so we reduce collisions
  shuffled_names = []

  for(var x=0;x<shuffled.length;x++) {
    shuffled[x].lines = shuffled[x].lines.sort(() => 0.5 - Math.random());
    shuffled_names[x] = shuffled[x].lines[0]
  }

  // do some checking to see if we have too many identical choices
  let unique_lines = [...new Set(shuffled_names)]
  if(unique_lines.length < shuffled_names.length) {
    console.log("too many duplicate stations in choices. Reshuffling");
    play_the_game(); return;
  }

  // console.log(JSON.stringify(shuffled))
  
  Alpine.store('game_data').station_to_guess = targetstation;
  Alpine.store('game_data').line_choices = shuffled;
  Alpine.store('game_data').choice_0 = shuffled[0].lines[0];
  Alpine.store('game_data').choice_1 = shuffled[1].lines[0];
  Alpine.store('game_data').choice_2 = shuffled[2].lines[0];
  Alpine.store('game_data').choice_3 = shuffled[3].lines[0];
}

function check_the_answer(num) {
  // shorthand
  user_chose = Alpine.store('game_data').line_choices[num].lines[0]
  trying_to_guess = Alpine.store('game_data').station_to_guess
  //console.log('user clicked button ' + JSON.stringify(num))

  if(trying_to_guess.lines.includes(user_chose)) {
    Alpine.store('game_data').outcome = "You chose right!\n\n" + trying_to_guess.name + " IS on the " + user_chose + " line";
    Alpine.store('game_data').session_score.correct++
  } else {
    Alpine.store('game_data').outcome = "No! you chose wrong. " + trying_to_guess.name + " is NOT on the " + 
          user_chose + " line.\n\n" +
          "However it IS on the following lines: \n\n" +
          trying_to_guess.lines.join(", \n\n")
          ;
    Alpine.store('game_data').session_score.incorrect++
  }
  // now set station_to_guess back to blank and offer another game
  Alpine.store('game_data').station_to_guess = "";
  Alpine.store('game_data').play_text = "Play Again?"
}

// this runs first and loads the data from JSON (or an API)
function load_the_data() {
  return {
    isLoading: false,
    gamePhase: "setup",
    data: null,
    station_to_guess: "",
    line_choices: [],
    choice_0: "",
    choice_1: "",
    choice_2: "",
    choice_3: "",
    outcome: "",
    session_score: {correct: 0, incorrect: 0},
    play_text: "Ready to play?",
    fetchStations() {
      this.isLoading = true;
      fetch('/game_data.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          this.isLoading = false;
          this.data = data;
          this.gamephase = "preload"

        })
        .then(
          Alpine.store('game_data', this)
        )
    }
  }
}


