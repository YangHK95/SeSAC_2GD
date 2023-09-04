import classNames from "classnames";
import "../components/styles/basic_css.css";
import style from "../components/styles/style.module.css";
import Names from "classnames/bind";
import { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function BasicCss({ color }) {
  const childDiv = {
    background: "pink",
    width: "150px",
    height: "150px",
    fontSize: "20px",
    textAlign: "center",
    lineHeight: "150px",
  };

  // module.css
  const setting = Names.bind(style);
  const [isTrue, setIstrue] = useState(true);
  const stateVal = "first";
  const stateVal2 = true;
  //styled-components
  const rotate = keyframes`
    0%{
      transform:rotate(0);
    } 
    50%{
      transform: rotate(180deg);
    }
    100%{
      transform:rotate(360deg)
    }
  
  `;
  const H4Title = styled.h4`
    background-color: yellow;
    /* 세로 */
    @media screen and (max-width: 780px) and (orientation: portrait) {
      font-size: 30px;
      color: green;
    }
    /* 가로 */
    @media screen and (max-width: 780px) and (orientation: landscape) {
      font-size: 40px;
      color: green;
    }
  `;
  const ParentDiv = styled.div`
    background-color: #444;
    display: flex;
  `;
  const ChildSpan = styled.span`
    /* color: red; */
    color: ${color ? color : "red"};
    &:hover {
      color: white;
      cursor: pointer;
      animation: ${rotate} 1s infinite linear;
    }
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  `;
  return (
    <>
      <h3>스타일 적용방법</h3>
      <ol>
        <li>인라인 스타일 적용 방법</li>
        <li>css 파일 import</li>
        <li>module.css import</li>
        <li>Style Component</li>
      </ol>
      <h4 style={{ color: "#111" }}>인라인 스타일로 적용</h4>
      <div style={{ background: "#ddd" }}>
        <div style={childDiv}>안녕하세요!</div>
      </div>
      <h4>css 파일 import</h4>
      <div className="box1 second">
        <div>안녕하세요</div>
      </div>
      <h4>module.css 파일 import</h4>
      <div className={style.box2}>
        <div>안녕하세요</div>
      </div>
      <hr></hr>
      <div className={`${style.first} ${style.second}`}>
        클래스 여러개 지정하는 방법1 - 템플릿 리터럴 - 잘 안씀
      </div>
      <div className={[style.first, style.second].join(" ")}>
        클래스 여러개 지정하는 방법2 - 배열과 join(' ') -잘 안씀
      </div>
      <div className={classNames(style.first, style.second)}>
        클래스 여러개 지정하는 방법3 -classnames 모듈 사용
      </div>
      <div className={setting("first", "second")}>
        classnames 모듈 사용해보기 - bind 이용
      </div>
      <div className={setting("first", { second: true })}>
        classnames 모듈 사용
      </div>
      <div className={setting("first", { second: isTrue })}>
        classnames 모듈 사용
      </div>
      <button
        onClick={() => {
          setIstrue(!isTrue);
        }}
      >
        클릭
      </button>
      <div className={setting({ stateVal2 }, { second: isTrue }, stateVal)}>
        classnames 모듈 사용
      </div>

      <H4Title>styled-components 이용</H4Title>
      <ParentDiv>
        <ChildSpan>child1</ChildSpan>
        <ChildSpan>child2</ChildSpan>
        <ChildSpan>child3</ChildSpan>
      </ParentDiv>
    </>
  );
}
