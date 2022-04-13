import { RiSystemDeleteBinFill } from 'solid-icons/ri'
import { projects } from "../../store";
import { removeProjectTodos } from "./project";

const RemoveAllTodos = () => {
  return (
    <button
      className="removeTodosBtn"
      onClick={() => removeProjectTodos(projects.clickedProject)}
    >
      <RiSystemDeleteBinFill size={21} weight="fill" />Todos
    </button>
  );
};

export { RemoveAllTodos };
