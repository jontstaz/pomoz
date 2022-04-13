import TodoCreator from "./todoCreator";
import TodoList from "./todoList";
import { RemoveAllTodos } from "./todoBtns";
import { projects } from "../../store";

export default () => {
  return (
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
  );
};
