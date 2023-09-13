import DoneList from "./DoneList";
import TodoList from "./TodoList";
import "../scss/main.scss";
export default function ListContainer() {
  return (
    <main>
      <TodoList></TodoList>
      <DoneList></DoneList>
    </main>
  );
}
