function HelloWorlButton() {
  const [isClick, setIsClick] = React.useState(false); //[변수,함수] isClick=true라는 뜻
  const text = isClick ? "클릭이 되었군요!" : "hello, react world";
  //button
  //button > div > span으로 구조 변경
  return React.createElement(
    <button onClick={() => setIsClick(!isClick)}>
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}

// const elemnet = React.createElement;
const DOMContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(DOMContainer);
// root.render(elemnet(HelloWorlButton));
root.render(<HelloWorlButton />);
