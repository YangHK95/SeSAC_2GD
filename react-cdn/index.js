function HelloWorlButton() {
  const [isClick, setIsClick] = React.useState(false); //[변수,함수] isClick=true라는 뜻
  const text = isClick ? "클릭이 되었군요!" : "hello, react world";
  //   return React.createElement(
  //     "button",
  //     {
  //       // onClick: () => {
  //       //   console.log(
  //       //     `버튼이 눌리면 표시되는 onclick,react 에서의 onClick 은 c가 대문자네요!ㅉ`
  //       //   );
  //       // },
  //       onClick: () => setIsClick(!isClick),
  //     },
  //     //"hello, react world" // 버튼에 들어갈 말을 입력
  //     text
  //   );
  // }
  //  button
  // button > div > span 으로 구조 변경
  return React.createElement(
    "button",
    {
      onClick: () => setIsClick(!isClick),
    },
    React.createElement(
      "div",
      null,
      React.createElement("span", null, React.createElement)
    )
  );
}

const elemnet = React.createElement;
const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);
root.render(elemnet(HelloWorlButton));
