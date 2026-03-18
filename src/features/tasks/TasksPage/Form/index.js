import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled.js";
import { addTask } from "../../tasksSlice.js";
import Input from "../../Input/index.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

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

    dispatch(
      addTask({
        content: trimmedContent,
        done: false,
        id: nanoid(),
      }),
    );

    setNewTaskContent("");
    focusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        title="Wpisz zadanie do wykonania."
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
