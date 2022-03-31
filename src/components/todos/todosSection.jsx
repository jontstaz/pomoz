import TodoCreator from "./todoCreator";
import TodoList from "./todoList";
import { RemoveAllTodos } from "./todoBtns";
import { projects } from "../../store";
import { view } from "@risingstack/react-easy-state";

export default view(() => (
  <main className="todoSection">
    <TodoList />

    <div className="todoFooter">
      {(projects.clickedProject != "Important" &&
        projects.clickedProject != "Low priority") &&
        (
          <>
            <RemoveAllTodos />
            <TodoCreator />
          </>
        )}
    </div>
  </main>
));
