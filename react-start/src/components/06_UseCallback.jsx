import { useState, useEffect, useCallback } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  const func1 = () => {
    console.log(`number:${number}`);
  };
  const func2 = useCallback(() => {
    console.log(`number:${number}`);
  }, []);
  useEffect(() => {
    console.log("함수1 번경");
  }, [func1, func2]);
  return (
    <>
      <h4>useCallback</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() => {
          func1();
          func2();
        }}
      >
        함수 호출
      </button>
      <button
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        {isTrue.toString()}
      </button>
    </>
  );
}
