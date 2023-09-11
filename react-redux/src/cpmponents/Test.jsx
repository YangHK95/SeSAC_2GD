import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const number = useSelector((state) => state);
  // const number = useSelector((state) => {
  //   return state});
  const dispatch = useDispatch();
  return (
    <>
      <h2>store의 값 가져오기(useSelector 이용)</h2>
      <p>store에 저장되어 있는 state 는{number}</p>
      <h2>store의 state 변경 (useDispatch 이용)</h2>
      <button onClick={() => dispatch({ type: "증가" })}>+</button>
      <button onClick={() => dispatch({ type: "감소" })}>-</button>
    </>
  );
}
