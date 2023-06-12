import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="section__buttons">
            <button className="section__headingButton">
                {hideDoneTasks === false ? "Ukryj" : "Pokaż"} ukończone
            </button>

            <button
                className="section__headingButton"
                disabled={tasks.every(({ done }) => done === true)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;