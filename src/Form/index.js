import React, { useState, useRef, useEffect } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedContent = newTaskContent.trim();
    if (trimmedContent.length === 0) {
      inputRef.current.focus();
      return;
    }
    addNewTask(trimmedContent);
    setNewTaskContent("");
    focusInput();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        className="form__newTask"
        placeholder="Co jest do zrobienia?"
        title="Wpisz zadanie do wykonania"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
