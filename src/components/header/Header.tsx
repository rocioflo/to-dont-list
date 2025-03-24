import "./Header.css";
import SleepingFigure from "../../assets/sleep.png";

export const Header = () => {
  return (
    <header>
      <div className="titleWrapper">
        <h1>To Don't List</h1>
        <img src={SleepingFigure} alt="Sleeping figure" className="titleIcon" />
      </div>
      <h2>(Pro-procrastination nation)</h2>
    </header>
  );
};
