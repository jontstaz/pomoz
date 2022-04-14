// import { AiOutlineFire } from "solid-icons/ai";
import { HiSolidFire } from "solid-icons/hi";
import { IoTodaySharp } from "solid-icons/io";
// import { BsFolder2 } from 'solid-icons/bs'
import { BiFolder } from 'solid-icons/bi'

import { projects } from "../../store";
import Project from "./project";

// list of all project btns on the sidebar
export default () => {
  return (
    <div class="projectLists">
      <Project name="Today" icon={IoTodaySharp} color="blue" />
      <Project name="Important" icon={HiSolidFire} color="red" />
      <Project name="Low priority" icon={HiSolidFire} color="green" />

      {/* user added projects*/}
      {projects.list.map((item) => <Project name={item} icon={BiFolder} />)}
    </div>
  );
};
