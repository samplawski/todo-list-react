import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "./Form";
import TasksList from "./TasksList";
import ExampleTasksButton from "./ExampleTasksButton";
import Buttons from "./Buttons";
import Footer from "../../../common/Footer";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton />}
        body={<Form />}
      />

      <Section title="Szukaj zadania" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />

      <Footer />
    </Container>
  );
}

export default TasksPage;
