import ListChild from "./ListChild";

function PracticeProps() {
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <ListChild title="블로그 쓰기" content="블로그 두 개 쓰기" />
      <ListChild title="리액트 공부하기" content="state 사용법 익히기" />
      <ListChild title="저녁 먹기" content="스타필드 맛집 정복!!" />
    </div>
  );
}
export default PracticeProps;
