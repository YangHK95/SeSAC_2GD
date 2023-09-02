import { useEffect } from "react";

export default function TimerComponent() {
  useEffect(() => {
    //setTImeout(()=>,1000)
    //setInterval(함수,밀리sec)-> 밀리 sec마다 함수를
    const timer = setInterval(() => {
      console.log("timer 동작중");
    }, 100);
    // setInterval 함수를 이용하면 반복이 되는 개체를 전달
    //clearSetinterval(객체) 반복을 해제합니다
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>Timer</>;
}
