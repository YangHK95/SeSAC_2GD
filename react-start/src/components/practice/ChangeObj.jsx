import { useState } from "react";
export default function ChangeObj({ objArr }) {
  console.log(objArr);
  const [index, setIndex] = useState(0);
  function changePropfile() {
    if (index === objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  console.log(index);
  console.log(objArr.length);
  return (
    <>
      {objArr.map((data, i) => {
        return (
          i === index && (
            <div key={i}>
              <div>이름: {data.name}</div>
              <div>나이: {data.age}</div>
              <div>별명: {data.nickName}</div>
            </div>
          )
        );
      })}
      <button
        onClick={() => {
          index === objArr.length - 1 ? setIndex(0) : setIndex(index + 1);
        }}
      >
        멤버 바꾸기
      </button>
    </>
  );
}
