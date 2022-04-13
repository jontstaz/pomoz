import VolumeSlider from "./options/volumeSlider";
import GoalCounter from "./options/goals";

// settings component
export default () => {
  return (
    <>
      <h1>Settings</h1>

      <main className="settings">
        <div className="miscWidgets">
          <p>this works?</p>

          {/*  why dont these render?*/}

          <VolumeSlider />
          <GoalCounter />
        </div>
      </main>
    </>
  );
};
