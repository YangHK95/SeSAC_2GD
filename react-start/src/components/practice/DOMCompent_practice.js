import { useRef, useState } from "react";

function DOMCompenet_practice(props) {
  // const { background, setBackground } = props;
  const [color, setColor] = useState("white");
  const inputRef = useRef(null);
  const getInput = () => {
    // console.log("input value : ", inputRef.current?.value);
    if (!inputRef.current) return;
    setColor(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <input type="text" ref={inputRef}></input>
      <br></br>
      <button onClick={getInput}>색 적용</button>
    </div>
  );
}

export default DOMCompenet_practice;
