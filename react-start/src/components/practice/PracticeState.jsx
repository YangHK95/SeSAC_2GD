import { useState } from "react";

export default function PracticeState() {
  const [number, setNumber] = useState(0);
  let variable = 0;

  function setVariable() {
    variable = variable + 1;
    console.log(`변수(variable) : ${variable} / 스테이트(number):${number}`);
  }
  return (
    <div>
      <div>
        {number}
        {number > 7 ? "🎈" : "😊"}
      </div>
      <button
        onClick={() => {
          setNumber(number + 1);
          setVariable();
        }}
      >
        1증가
      </button>
      <button onClick={() => setNumber(number - 1)}>1감소</button>
    </div>
  );
}
