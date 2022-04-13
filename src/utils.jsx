const volume = 90;

function numToText(min, sec) {
  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;
  return `${min} : ${sec}`;
}

function getProgressValue(ogTime, newTime) {
  newTime = newTime / 60;
  const timeProgres = ((ogTime - newTime) / ogTime) * 100;
  return timeProgres;
}

function playSound(path) {
  let n = document.querySelector("audio");
  n.setAttribute("src", path);
  n.volume = volume / 100;
  n.play();
}

function switchTheme(name) {
  document.body.dataset.theme = name;
  localStorage.setItem("theme", name);
}

export { getProgressValue, numToText, playSound, switchTheme };
