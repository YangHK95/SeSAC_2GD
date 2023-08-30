import { useState } from "react";
function Handler_ex() {
  const [hi, setHi] = useState(true);
  const [text, setText] = useState("검정색 글씨");
  const [colorValue, setColorValue] = useState("black");
  const [hello, setHello] = useState(true);
  const [opacity, setOpacity] = useState(1);
  // function changered() {
  //   setText("빨강색 글씨");
  //   setColorValue("red");
  // }
  // function changeblue() {
  //   setText("파랑색 글씨");
  //   setColorValue("blue");
  // }

  return (
    <div>
      <div>{hi ? "hello World" : "Goodby World"}</div>
      <button onClick={() => setHi(!hi)}>클릭</button>

      <div style={{ color: colorValue }}>{text}</div>
      <button
        onClick={() => {
          setText("빨강색 글씨");
          setColorValue("red");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setText("파랑색 글씨");
          setColorValue("blue");
        }}
      >
        파랑색
      </button>
      <button
        onClick={() => {
          const newOpacity = opacity === 1 ? 0 : 1;
          setOpacity(newOpacity);
        }}
      >
        {opacity === 1 ? "사라져라" : "보여라"}
      </button>
      <br></br>
      <button onClick={() => setHello(!hello)}>
        {hello ? "사라져라" : "보여라"}
      </button>
      <div>{hello ? "안녕하세요" : ""}</div>
    </div>
  );
}
export default Handler_ex;
