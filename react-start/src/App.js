import UseJSX from "./components/UseJSX";
import FirstPractice from "./components/practice/FirstPractice";
import ClassCom from "./components/ClassCom.js";
import FunctionState from "./components/FunctionState.jsx";
import ClassState from "./components/ClassState.jsx";
import PracticeState from "./components/practice/PracticeState.jsx";
import FunctionProps from "./components/FunctionProps";
import PracticeProps from "./components/practice/PracticeProps.jsx";
import { ClassProps, ClassProps2 } from "./components/practice/ClasspProps";

function App() {
  return (
    <div>
      <UseJSX></UseJSX>
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
    </div>
  );
}

export default App;
