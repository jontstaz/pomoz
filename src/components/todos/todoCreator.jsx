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
      class="newTodoBtn"
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

    if (todo.name.trim().length == 0 || todo.note.trim().length == 0) {
      invalidTodo = true;
      errMessage = "no empty input fields please!";
    }

    todos.list.forEach((i) => {
      if (i.name == todo.name.trim()) {
        invalidTodo = true;
        errMessage = "avoid making duplicate!";
        return;
      }
    });

    if (todo.name.length > 25) {
      invalidTodo = true;
      errMessage = "do not exceed todo title characters by 20";
    }

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
    <div class="todoInput">
      <XCircle
        size={20}
        weight="fill"
        class="closeTodoInput"
        onClick={() => inputbox.show = false}
      />

      <input placeholder="name" onChange={(e) => todo.name = e.target.value} />
      <textarea placeholder="note" onChange={(e) => todo.note = e.target.value}>
      </textarea>

      <div style={{ display: "flex", gap: ".5rem" }}>
        <div class="todoPriority">
          <label for="priority">priority</label>

          <select
            id="priority"
            onClick={(e) => todo.priority = e.target.value}
          >
            <option value="low">low</option>
            <option value="high">high</option>
          </select>
        </div>

        <button class="newProjectBtn" onClick={() => saveTodo(todo)}>
          save
        </button>
      </div>
    </div>
  );
}

export default view(() => (
  <div class="todoCreator">
    {inputbox.show &&
      <TodoInput />}
    <NewTodoBtn />
  </div>
));
