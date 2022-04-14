import { createMutable } from "solid-js/store";

const timer = createMutable(
  {
    timeInText: "25 : 00",
    progress: 0,
    playBtn: true,
    todaysProgress: 0,
    goalHrs: 5,
    volume: 90,
    theme: "light",
  },
);

if (localStorage.volume) {
  timer.volume = localStorage.volume;
}

const projects = createMutable(
  { clickedProject: "Today", showInputBox: false, list: [] },
);

if (localStorage.projects) {
  let tmp = localStorage.projects;
  projects.list = tmp.split(",");
}

const todos = createMutable({ list: [] });

if (localStorage.todos) {
  todos.list = JSON.parse(localStorage.todos);
}

export { projects, timer, todos };
