import { Trash } from "phosphor-react";
import { projects } from "../../store";
import { removeProjectTodos } from "./project";

const RemoveAllTodos = () => {
  return (
    <button
      className="removeTodosBtn"
      onClick={() => removeProjectTodos(projects.clickedProject)}
    >
      <Trash size={21} weight="fill" />Todos
    </button>
  );
};

export { RemoveAllTodos };
