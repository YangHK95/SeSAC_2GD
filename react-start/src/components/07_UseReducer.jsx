import { useReducer, useState } from "react";

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  //   const [스테이트, 디스패치] = useReducer(리듀서, 스테이트 초기값);
  const reducer = (state, action) => {
    // action = {type:'~', payload: ~}
    switch (action.type) {
      case "deposit": //예금: 기존 state에서 number를 더한다.
        return state + action.payload;
      case "withdraw": //출금: 기존 state에서 number를 뺀다.
        return state - action.payload;
      default:
        return state;
    }
  };
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h4>useReducer</h4>
      <p>잔고 {money} 원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}
