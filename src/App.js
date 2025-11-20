import React from "react";
import Container from "./Container"
import Header from "./Header"
import Section from "./Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Footer from "./Footer";


const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />

      <Footer />
    </Container>
  );
}

export default App;
