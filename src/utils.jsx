import { volume } from "./store";

function numToText(min, sec) {
  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;
  return `${min} : ${sec}`;
}

function setProgressValue(ogTime, newTime) {
  newTime = newTime / 60;
  const timeProgres = ((ogTime - newTime) / ogTime) * 100;
  return timeProgres;
}

function playSound(path) {
  let n = document.querySelector("audio");
  n.setAttribute("src", path);
  n.volume = volume.value / 100;
  n.play();
};

function switchTheme(name) {
  document.body.dataset.theme = name;
  localStorage.setItem("theme", name);
}

let progressBar = {
  rotation: 0.25,
  strokeLinecap: "butt",
  textSize: "1.2rem",
  pathTransitionDuration: 0.3,
};

export { numToText, playSound, progressBar, switchTheme, setProgressValue };
