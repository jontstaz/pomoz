import { AiOutlinePause } from "solid-icons/ai";
import { VscDebugRestart,VscDebugStart } from 'solid-icons/vsc'

import { createStore } from "solid-js/store";

import "../css/timer.css";

import { numToText, playSound, setProgressValue } from "../utils";

import tickSound from "../../assets/audio/tick.mp3";
import timerSound from "../../assets/audio/timerSound.mp3";

import RadialBar from "./radialBar";

const [store, setStore] = createStore(
  {
    timeInText: "25 : 00",
    progress: 0,
    playBtn: true,
    todaysProgress: 0,
  },
);

const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

if (!localStorage.date || localStorage.date != utc) {
  localStorage.setItem("date", utc);
  localStorage.setItem("todaysProgress", 0);
}

if (localStorage.date == utc && localStorage.todaysProgress) {
  setStore("todaysProgress", parseInt(localStorage.todaysProgress));
}

export let interval, pausedTime, currentClick;
export let totalTime = 25, pomoTime = totalTime * 60;

function update() {
  if (pomoTime === 0) {
    playSound(timerSound);
    clearInterval(interval);

    setStore("timeInText", numToText(0, 0));
    setStore("progress", 100);
    setStore("playBtn", true);

    document.title = "Pomochad";

    setStore("todaysProgress", +totalTime);
    localStorage.setItem("todaysProgress", store.todaysProgress);
  }

  const min = Math.floor(pomoTime / 60);
  const sec = pomoTime % 60;

  setStore("timeInText", numToText(min, sec));

  document.title = numToText(min, sec);
  setStore("progress", setProgressValue(totalTime, pomoTime));
  pomoTime--;
}

function run(action) {
  currentClick = action;
  interval = setInterval(update, 1000);

  if (action == "start" || action == "resume") setStore("playBtn", false);
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

  setStore("progress", setProgressValue(totalTime, pausedTime));

  const min = Math.floor(pausedTime / 60);
  const sec = pausedTime % 60;

  setStore("timeInText", numToText(min, sec));

  pomoTime = 0;
  clearInterval(interval);
  setStore("playBtn", true);
}

function reset() {
  document.title = "Pomochad";

  clearInterval(interval);
  currentClick = "reset";

  setStore("progress", 0);
  setStore("timeInText", `${totalTime} : 00`);

  pomoTime = totalTime * 60;
  setStore("playBtn", true);
}

function SessionBtns() {
  return (
    <div class="sessionBtns">
      {store.playBtn &&
        <VscDebugStart onClick={start} class="playBtn" size={24} />}
      {!store.playBtn &&
        <AiOutlinePause onClick={pause} class="playBtn" size={24} />}

      <VscDebugRestart
        onClick={reset}
        class="resetBtn"
        size={24}
      />
    </div>
  );
}

// Timer
export default function Timer() {
  return (
    <main class="timer">
      <RadialBar
        strokeWidth={6}
        percentage={store.progress}
        innerText={store.timeInText}
        mainClass="MainCircle"
      />
      <SessionBtns />
    </main>
  );
}
