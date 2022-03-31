import { store, view } from "@risingstack/react-easy-state";
import { PlusCircle, XCircle } from "phosphor-react";
import { projects, todos } from "../../store";

const inputbox = store({
  show: false,
  priority: "low",
});

function NewTodoBtn() {
  return (
    <button
      className="newTodoBtn"
      onClick={() => inputbox.show = true}
    >
      <PlusCircle size={21} weight="fill" /> Todo
    </button>
  );
}

function TodoInput() {
  let todo = {
    name: "",
    note: "",
    priority: "low",
    finished: false,
    project: "Today",
  };

  function saveTodo(todo) {
    let invalidTodo = false;
    let errMessage;

    todos.list.forEach((i) => {
      if (i.name == todo.name.trim()) {
        invalidTodo = true;
        errMessage = "avoid making duplicate!";
        return;
      }
    });

    if (invalidTodo) {
      alert(errMessage);
      return;
    }

    todo.project = projects.clickedProject;
    todos.list.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos.list));

    inputbox.show = false;
  }

  return (
    <form action="" method="get" className="todoInput">
      <XCircle
        size={20}
        weight="fill"
        className="closeTodoInput"
        onClick={() => inputbox.show = false}
      />

      <label for="todo-name" style={{ display: "none" }}></label>
      <input
        id="todo-name"
        name="todo-name"
        placeholder="name"
        onChange={(e) => todo.name = e.target.value}
      />

      <label for="todo-note"  style={{ display: "none" }}></label>
      <textarea
        id="todo-note"
        name="todo-note"
        placeholder="note"
        onChange={(e) => todo.note = e.target.value}
      >
      </textarea>

      <div style={{ display: "flex", gap: ".5rem" }}>
        <div className="todoPriority">
          <label for="priority">priority</label>

          <select
            id="priority"
            name="priority"
            onClick={(e) => todo.priority = e.target.value}
          >
            <option value="low">low</option>
            <option value="high">high</option>
          </select>
        </div>

        <button className="newProjectBtn" onClick={() => saveTodo(todo)}>
          save
        </button>
      </div>
    </form>
  );
}

export default view(() => (
  <div className="todoCreator">
    {inputbox.show &&
      <TodoInput />}
    <NewTodoBtn />
  </div>
));
