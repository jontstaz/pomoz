import VolumeSlider from "./options/volumeSlider";
import GoalCounter from "./options/goals";

// settings component
export default () => {
  return (
    <>
      <h1>Settings</h1>

      <main className="settings">
        <div className="miscWidgets">
          <VolumeSlider />
          <GoalCounter />
        </div>
      </main>
    </>
  );
};
