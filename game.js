// Game variables
const output = document.getElementById("output");
const input = document.getElementById("input");

let currentScene = "start";

// Game scenes
const scenes = {
  start: {
    text: "Welcome to the Adventure! You wake up in a dark forest. Two paths lie ahead. Do you:\n1. Take the left path\n2. Take the right path",
    choices: {
      "1": "leftPath",
      "2": "rightPath"
    }
  },
  leftPath: {
    text: "You find a treasure chest! Do you:\n1. Open it\n2. Leave it alone",
    choices: {
      "1": "openChest",
      "2": "leaveChest"
    }
  },
  rightPath: {
    text: "You encounter a wild animal! Do you:\n1. Run away\n2. Fight it",
    choices: {
      "1": "runAway",
      "2": "fightAnimal"
    }
  },
  openChest: {
    text: "The chest is filled with gold! You win!",
    choices: {}
  },
  leaveChest: {
    text: "You walk away, and the adventure ends. Goodbye!",
    choices: {}
  },
  runAway: {
    text: "You escape safely. Well done!",
    choices: {}
  },
  fightAnimal: {
    text: "The animal is too strong. You lose!",
    choices: {}
  }
};

// Display a scene
function displayScene(sceneKey) {
  const scene = scenes[sceneKey];
  output.innerText += "\n\n" + scene.text;
  currentScene = sceneKey;
}

// Handle input
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const choice = input.value.trim();
    const scene = scenes[currentScene];

    if (scene.choices[choice]) {
      displayScene(scene.choices[choice]);
    } else {
      output.innerText += "\n\nInvalid choice. Try again.";
    }
    input.value = "";
    output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
  }
});

// Start the game
displayScene("start");
