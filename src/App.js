import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Footer from "./Footer";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} 
      />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask}/>}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />

      <Footer />
    </Container>
  );
}

export default App;
