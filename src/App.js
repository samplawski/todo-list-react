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

const hideDoneTasks = false;

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
        body={<TasksList tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />

      <Footer />
    </Container>
  );
}

export default App;
