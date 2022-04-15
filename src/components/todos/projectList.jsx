import { BiFolder, BiSolidHeartCircle } from "solid-icons/bi";
import { FaDotCircle } from "solid-icons/fa";
import { HiOutlineCalendar } from "solid-icons/hi";

import { projects } from "../../store";
import Project from "./project";

// list of all project btns on the sidebar
export default () => {
  return (
    <div class="projectLists">
      <Project name="Today" icon={HiOutlineCalendar} color="blue" />
      <Project
        name="Important"
        icon={BiSolidHeartCircle}
        color="red"
      />
      <Project name="Low priority" icon={FaDotCircle} color="green" />

      {/* user added projects*/}
      {projects.list.map((item) => <Project name={item} icon={BiFolder} />)}
    </div>
  );
};
