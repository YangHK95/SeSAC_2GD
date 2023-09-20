import { PropsType1, PropsType2, PropsType3 } from "../components/PropsType";
import Count from "../components/Count";
import SetText from "../components/SetText";
import EventObj from "../components/EventObj";
import HeaderMenu from "../components/HeaderMenu";
export default function Lecture() {
  return (
    <>
      <HeaderMenu></HeaderMenu>
      <h1>Lecture page</h1>
      <PropsType1 name="allie"></PropsType1>

      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      ></PropsType2>
      <PropsType3 width={200} height={200} text="안녕하세요"></PropsType3>
      <Count></Count>
      <SetText></SetText>
      <EventObj></EventObj>
    </>
  );
}
