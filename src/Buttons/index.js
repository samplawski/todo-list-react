import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <div className="section__buttons">
      <button onClick={toggleHideDone} className="section__headingButton">
        {hideDone === false ? "Ukryj" : "Pokaż"} ukończone
      </button>

      <button
        onClick={setAllDone}
        className="section__headingButton"
        disabled={tasks.every(({ done }) => done === true)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
