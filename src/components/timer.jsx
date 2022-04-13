import "../css/timer.css";
import RadialBar from "./radialBar";
import { createMutable } from "solid-js/store";

import { AiOutlinePause } from "solid-icons/ai";
import { VscDebugRestart, VscDebugStart } from "solid-icons/vsc";

import { getProgressValue, numToText, playSound } from "../utils";

import tickSound from "../../assets/audio/tick.mp3";
import timerSound from "../../assets/audio/timerSound.mp3";

// save values here
const store = createMutable(
  {
    timeInText: "25 : 00",
    progress: 0,
    playBtn: true,
    todaysProgress: 0,
  },
);

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

// reset todaysProgress on next day
if (!localStorage.date || localStorage.date != utc) {
  localStorage.setItem("date", utc);
  localStorage.setItem("todaysProgress", 0);
}

// update todaysProgress on current day
if (localStorage.date == utc && localStorage.todaysProgress) {
  store.todaysProgress = parseInt(localStorage.todaysProgress);
}

export let interval, pausedTime, currentClick;
export let totalTime = 25, pomoTime = totalTime * 60;

function update() {
  // when timer is finished
  if (pomoTime === 0) {
    playSound(timerSound);

    store.timeInText = numToText(0, 0);
    store.progress = 100;
    store.playBtn = true;
    store.todaysProgress = store.todaysProgress + totalTime;

    clearInterval(interval);

    localStorage.setItem("todaysProgress", store.todaysProgress);
  }

  const min = Math.floor(pomoTime / 60);
  const sec = pomoTime % 60;

  store.timeInText = numToText(min, sec);
  store.progress = getProgressValue(totalTime, pomoTime);

  document.title = numToText(min, sec);
  pomoTime--;
}

function run(action) {
  currentClick = action;
  interval = setInterval(update, 1000);

  if (action == "start" || action == "resume") {
    store.playBtn = false;
  }

  action == "start" ? playSound(tickSound) : (pomoTime = pausedTime);
}

function start() {
  switch (currentClick) {
    // start
    case undefined:
    case "reset":
      run("start");
      break;

    // resume

    default:
      run("resume");
  }
}

function pause() {
  currentClick = "pause";
  pausedTime = pomoTime;

  store.playBtn = true;
  store.progress = getProgressValue(totalTime, pausedTime);

  const min = Math.floor(pausedTime / 60);
  const sec = pausedTime % 60;

  store.timeInText = numToText(min, sec);

  pomoTime = 0;
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);

  document.title = "Pomochad";
  currentClick = "reset";
  pomoTime = totalTime * 60;

  store.progress = 0;
  store.playBtn = true;
}

function ActionBtns() {
  return (
    <div class="ActionBtns">
      {/* show play btn by default */}

      {store.playBtn &&
        <VscDebugStart onClick={start} class="playBtn" size={24} />}

      {/* hide playBtn and show pause btn in pauseMode*/}

      {!store.playBtn &&
        <AiOutlinePause onClick={pause} class="playBtn" size={24} />}

      {/*Reset btn*/}

      <VscDebugRestart
        onClick={reset}
        class="resetBtn"
        size={24}
      />
    </div>
  );
}

export default function Timer() {
  return (
    <main class="timer">
      <RadialBar
        strokeWidth={6}
        percentage={store.progress}
        innerText={store.timeInText}
        mainClass="MainCircle"
      />
      <ActionBtns />
    </main>
  );
}
