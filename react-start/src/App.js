import UseJSX from "./components/UseJSX";
import FirstPractice from "./components/practice/FirstPractice";
import ClassCom from "./components/ClassCom.js";
import FunctionState from "./components/FunctionState.jsx";
import ClassState from "./components/ClassState.jsx";
import PracticeState from "./components/practice/PracticeState.jsx";
import FunctionProps from "./components/FunctionProps";
import PracticeProps from "./components/practice/PracticeProps.jsx";
import { ClassProps, ClassProps2 } from "./components/practice/ClasspProps";
import test from "./components/test";
import Handler from "./ex/Handler_ex";
import Handler_ex from "./ex/Handler_ex";
import DOMComponent from "./components/DOMCompenet";
import DOMCompenet_practice from "./components/practice/DOMCompent_practice";
import { useState } from "react";
import DOMCompenet_practice2 from "./components/practice/DOMCompent_practice2";
import RefVarState from "./components/RefVarState";
import EffectComponent from "./EffectComponent";
import TimerComponent from "./TimerComponent";
import TimerComponent_pra from "./components/practice/TimerComponent_pra";
import PropsMap from "./components/PropsMap";
import MapChild from "./components/practice/MapChild";
import PracticeMap from "./components/practice/PracticeMap";
import PororoObj from "./components/practice/PororoObj";
import BasicCss from "./components/BasicCss";
import UseScss from "./components/UseScss";
import UseMemoObj from "./components/05_UseMemoObj";
import UseCallback from "./components/06_UseCallback";
import UseReducer from "./components/07_UseReducer";
import ContextTheme from "./components/08_ContextTheme";

function App() {
  function test(text) {
    console.log(text);
  }
  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
  };
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const dataArr = [
    { name: "peach", krPrice: 10000, count: 5 },
    { name: "strawverry", krPrice: 14000, count: 2 },
    { name: "pear", krPrice: 5000, count: 5 },
    { name: "apple", krPrice: 10000, count: 1 },
  ];

  return (
    <div>
      {/* <UseJSX></UseJSX>
      <FirstPractice></FirstPractice>
      <ClassCom></ClassCom>
      <FunctionState></FunctionState>
      <ClassState></ClassState>
      <PracticeState></PracticeState>
      <FunctionProps name="사과" krPrice={5000} number={10}></FunctionProps>
      <FunctionProps
        name="샤인머스켓"
        krPrice={35000}
        number={3}
      ></FunctionProps>
      <FunctionProps name="복숭아" children="안녕하세요"></FunctionProps>
      <FunctionProps>여기가 children입나다!</FunctionProps>
      <PracticeProps></PracticeProps>
      <ClassProps
        name="뽀로로"
        nickname="사고뭉치"
        color="#0186cb"
      ></ClassProps>
      <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095"></ClassProps2>

      <>
        <div>dd</div>
      </>
      <>
        <button onClick={test}>버튼</button>
        <a href="https://naver.com" onClick={handleClick}>
          a 태그입니다.
        </a>
      </>
      <Handler_ex></Handler_ex>
      <DOMComponent></DOMComponent>
      <DOMComponent></DOMComponent>
      <DOMComponent></DOMComponent>
      <DOMCompenet_practice></DOMCompenet_practice>
      <DOMCompenet_practice2></DOMCompenet_practice2>
      <RefVarState></RefVarState>
      <EffectComponent></EffectComponent>
      {show && <TimerComponent></TimerComponent>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        버튼
      </button>
      <br></br>
      {show2 && <TimerComponent_pra></TimerComponent_pra>}
      <button
        onClick={() => {
          setShow2(!show2);
        }}
      >
        {show2 ? "보이기" : "숨기기"}
      </button> */}
      {/* <PropsMap arr={dataArr}></PropsMap>
      <PracticeMap></PracticeMap> */}
      {/* <PororoObj></PororoObj> */}
      {/* <BasicCss color={"blue"}></BasicCss> */}
      {/* <UseScss></UseScss> */}
      <UseMemoObj></UseMemoObj>
      <UseCallback></UseCallback>
      <UseReducer></UseReducer>
      <ContextTheme></ContextTheme>
    </div>
  );
}

export default App;
