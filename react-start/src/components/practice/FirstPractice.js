export default function FirstPractice() {
  let helloStr = "hello,first exercise";
  function onClick() {
    alert("클릭 됨");
  }
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={onClick}
    >
      {helloStr}
    </div>
  );
}
