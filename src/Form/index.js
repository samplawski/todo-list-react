import "./style.css";

const Form = () => (
    <form className="form">
        <input
            className="form__newTask"
            placeholder="Co jest do zrobienia?"
            title="Wpisz zadanie do wykonania"
        />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;