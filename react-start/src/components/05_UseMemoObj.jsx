import { useEffect, useMemo, useState } from "react";
export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);
  useEffect(() => {
    console.log("location이 변경될 때마다 실행됩니다.");
  }, [location]);
  return (
    <>
      <h4>useMemo 써보기</h4>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      ></input>
      <div>{number}</div>
      <hr></hr>
      <div>{location.country}</div>
      <button onClick={() => setIsKorea(!isKorea)}>나라 바꾸기</button>
    </>
  );
}
