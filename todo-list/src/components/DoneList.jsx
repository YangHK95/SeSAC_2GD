import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );

  return (
    <>
      <h1>DoneList</h1>
      {list.length === 0 && <span>완료 목록이 비어있습니다.</span>}
      {list.map((el) => {
        return <li key={el.id}>{el.text}</li>;
      })}
    </>
  );
}
