let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let currentlyPlaying = true;
//images of closed doors
let closedDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
//images of open doors
let botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};
const startButton = document.getElementById("start");

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};
//create function to check if user won or lost
const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game Over! Play again?";
  }
  currentlyPlaying = false;
};

//number of dors
let numClosedDoors = 3;
//open doors
let openDoor1;
let openDoor2;
let openDoor3;

//randomly generate a choreDoors
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
};
//randomChoreDoorGenerator();
//create function to check if user clicked on the choreDoor
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

//check if door is clicked
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};
//create function to decrement numClosedDoors and check if numClosedDoors === 0
const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  }
};
startRound();
