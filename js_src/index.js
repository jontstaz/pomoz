import {} from "./modules/buttonClickActions";
import { score } from "./modules/divSelectors";
import {
  checkLocalStorage,
  setBoxText,
  saveLocalStorage,
  timerSound,
  setCircleProgress,
} from "./modules/miscFuncs";

import { makeSessionBtns } from "./modules/sessionButtons";
import { toggleTheme } from "./modules/themes";

// localStorage stuffs , save some defaults
export let userScore = 0,
  userTheme = "lightTheme";
checkLocalStorage();

makeSessionBtns();

// saveMin saves values when timer paused
export let saveMin, timer, currentClick;
export let totalTime = 25,
  pomoTime = totalTime * 60;

const checkTimer = (temp) => {
  if (pomoTime == 0) {
    clearInterval(temp), timerSound();

    userScore = parseInt(userScore);
    userScore += totalTime * 4;

    score.innerText = `Score : ${userScore}`;
    saveLocalStorage();
  }
};

const updatePomodoro = () => {
  checkTimer(timer);

  const min = Math.floor(pomoTime / 60);
  const sec = pomoTime % 60;

  if (pomoTime === 0) {
    setBoxText(min, sec);
    return;
  }

  setBoxText(min, sec);
  pomoTime--;
  setCircleProgress();
};

export const startPomodoro = () => {
  currentClick == "pause" ? (pomoTime = saveMin) : (pomoTime = totalTime * 60);
  timer = setInterval(updatePomodoro, 1000);
};

toggleTheme();
