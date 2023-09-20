import { PropsType1, PropsType2, PropsType3 } from "./components/PropsType";
import Count from "./components/Count";
import SetText from "./components/SetText";
import EventObj from "./components/EventObj";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lecture from "./pages/Lecture";
import Practice from "./pages/Practice";
import Matzip from "./pages/Matzip";

function App() {
  return (
    <>
      {/* <Link to ={'/'}>홈으로</Link>
    <Link to ={'/lecture'}>수업코드</Link>
    <Link to ={'/practice'}>연습하기</Link> */}
      {/* <PropsType1 name="allie"></PropsType1>
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      ></PropsType2>
      <PropsType3 width={200} height={200} text="안녕하세요"></PropsType3>
      <Count></Count>
      <SetText></SetText>
      <EventObj></EventObj> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lecture" element={<Lecture></Lecture>}></Route>
        <Route path="/practice" element={<Practice></Practice>}></Route>
        <Route path="/practice/matzip" element={<Matzip></Matzip>}></Route>
      </Routes>
    </>
  );
}

export default App;
