import { createMutable } from "solid-js/store";

// // projects on sidebar
// const projects = store({
//   clickedProject: "Today",
//   showInputBox: false,
//   list: [],
// });
//
// if (localStorage.projects) {
//   let tmp = localStorage.projects;
//   projects.list = tmp.split(",");
// }
//
// // todos
// const todos = store({
//   list: [],
// });
//
// if (localStorage.todos) {
//   todos.list = JSON.parse(localStorage.todos);
// }

// if (localStorage.volume) {
//   volume.value = localStorage.volume;
// }
//
// export { projects, todos, volume }

// save values here
const timer = createMutable(
  {
    timeInText: "25 : 00",
    progress: 0,
    playBtn: true,
    todaysProgress: 0,
    goalHrs: 5,
    volume: 90,
  },
);

export { timer };
