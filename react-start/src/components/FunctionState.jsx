import { useState } from "react";
export default function FunctionState() {
  // let apple = "사과";
  // function inEng() {
  //   const content = document.querySelector(".state .apple");
  //   content.innerText = "apple";
  //   apple = "apple";
  // }
  /* --------------------state로 사과-> apple-------------------------*/
  // const [apple, setApple] = useState("사과");
  /* 사과 -> apple -> 사과*/
  // function changeLang() {
  //   const apple = document.querySelector(".state div");
  //   apple.innerText === "사과"
  //     ? (apple.innerText = "apple")
  //     : (apple.innerText = "사과");
  // }
  /* state 사과 -> apple -> 사과*/
  const [showEnglish, setShowEnglish] = useState(true);
  return (
    // <div className="state">
    //   <div className="apple">사과</div>
    //   <div>{apple}</div>
    //   <button onClick={() => inEng}>영어로 바꾸기</button>
    // </div>
    /* state 사과 -> apple*/
    // <div>
    //   <div>{apple}</div>
    //   <button onClick={() => setApple("apple")}>영어로 변경</button>
    // </div>
    /* 사과 -> apple -> 사과 */
    // <div className="state">
    //   <div>사과</div>
    //   <button onClick={() => changeLang()}>언어 변경</button>
    // </div>
    /* state 사과 -> apple -> 사과 */
    <div>
      <div>{showEnglish ? "apple" : "사과"}</div>
      <button onClick={() => setShowEnglish(!showEnglish)}>
        {showEnglish ? "한글" : "영어"}로 변경
      </button>
    </div>
  );
}
