import { view } from "@risingstack/react-easy-state";
import { projects, todos } from "../../store";
import Todo from "./todo";

export default view(() => (
  <div className="todolist">
    {todos.list.map((item) => {
      // show all important todos
      if (projects.clickedProject == "Important") {
        if (item.priority == "high") {
          return <Todo name={item.name} note={item.note} />;
        }
      }

      // show all low priority todos
      if (projects.clickedProject == "Low priority") {
        if (item.priority == "low") {
          return <Todo name={item.name} note={item.note} />;
        }
      }

      // show per project todos
      if (item.project == projects.clickedProject) {
        return <Todo name={item.name} note={item.note} />;
      }
    })}
  </div>
));
