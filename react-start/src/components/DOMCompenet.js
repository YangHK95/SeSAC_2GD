// function DOMComponent() {
//   const getInput = () => {
//     //DOM에서 INPUT을 선택해 값을 가져오는 역할
//     const input = document.getElementById("input");
//     console.log("input value : ", input.value);
//   };
//   return (
//     <div>
//       <input type="text" id="input"></input>
//       <button onClick={getInput}>버튼</button>
//     </div>
//   );
// }

// export default DOMComponent;
import { useRef } from "react";
function DOMComponent() {
  // const 변수명 = useRef(null); ->처음 -> 누구랑 연결하지?
  //< ~~~~~~~~ ref={변수명} /> ref={} 이놈이 연결시켜줌
  // ? -> current가 있을때 실행하고 없으면 실행하지마 라는 뜻
  const inputRef = useRef(null);
  const getInput = () => {
    //DOM에서 INPUT을 선택해 값을 가져오는 역할
    const input = document.getElementById("input");
    console.log("input value : ", input.value);
  };
  const getInput2 = () => {
    // if(!inputRef.current)return 만약 current값이 없으면 다시 해..   그러면 retrun 전에 getInput2();를 입혁해도 에러 안뜸.
    // inputRef.current = <input type="text" id="input" ref={inputRef}> 같은 뜻
    console.log("input value2: ", inputRef.current?.value);
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" id="input" ref={inputRef}></input>
      <button onClick={getInput}>버튼</button>
      <button onClick={getInput2}>버튼2</button>
    </div>
  );
}

export default DOMComponent;
