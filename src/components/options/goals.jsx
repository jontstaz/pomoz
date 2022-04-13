import {
  BiSolidChevronDownCircle,
  BiSolidChevronUpCircle,
} from "solid-icons/bi";

import RadialBar from "../radialBar";
import { timer } from "../../store";
import { minToHrs } from "../../utils";

if (localStorage.targetGoal) timer.goalHrs = localStorage.targetGoal;

let currentGoal = parseFloat(timer.todaysProgress / 60);

function getCurrentProgress() {
  let progress = parseFloat(
    currentGoal / timer.goalHrs,
  );

  return Math.floor(progress * 100);
}

// btns to increase and decrease goal hrs
function ChangeHrsBtns() {
  function alterValues(a) {
    a == "add" ? timer.goalHrs++ : timer.goalHrs--;
    localStorage.targetGoal = timer.goalHrs;
  }

  return (
    <div className="adjustGoal">
      <BiSolidChevronUpCircle
        className="changeHrsBtn"
        weight="fill"
        onClick={() => alterValues("add")}
      />
      <BiSolidChevronDownCircle
        className="changeHrsBtn"
        weight="fill"
        onClick={() => alterValues("min")}
      />
    </div>
  );
}

function ProjectedGoal(props) {
  return (
    <div className="projectedGoal">
      <h3>Target Goal</h3>

      <div className="projectedGoalContent">
        <div className="projectedGoalText">{props.hours} hrs</div>
        <ChangeHrsBtns />
      </div>
    </div>
  );
}

// radial progress bar
function CurrentProgress() {
  return (
    <RadialBar
      percentage={getCurrentProgress()}
      innerText={`${minToHrs(currentGoal, 2)} hrs`}
      strokeWidth={6}
      mainClass="goalProgress"
    />
  );
}

export default () => {
  (
    <div className="goalWidgets">
      <ProjectedGoal hours={timer.goalHrs} />
      <CurrentProgress />
    </div>
  );
};
