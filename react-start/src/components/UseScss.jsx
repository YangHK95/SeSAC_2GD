import "../components/styles/style.scss";
import img1 from "../assets/img1.png";
import UseScss01 from "./practice/UseScss01";

export default function UseScss() {
  return (
    <>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
        <div className="box2">HT1</div>
        <div className="box2">HT2</div>
        <div className="box2">HT3</div>
        <div className="box2">HT4</div>
      </div>
      <h2>참고 &gt; 이미지 적용하기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <img src="../assets/img1.png" alt="경로명으로 접근" width={"100px"}></img>
      <img src={img1} alt="import 로 접근" width={"100px"}></img>
      <div className="src-img img-test"></div>

      <h2>2.public 폴더 내부의 이미지 가져오기</h2>
      <img src="/img1.png" alt="public 폴더 사진 접근" width={"100px"}></img>
      <img
        src={process.env.PUBLIC_URL + "/assets/img1.png"}
        alt="public 폴더 사진 접근"
        width={"100px"}
      ></img>
      <div className="public-img img-test"></div>
      <div className="practice">
        <h1>실습문제</h1>
        <div className="img1">
          <img src={process.env.PUBLIC_URL + "/assets/img1.png"} alt="" />
        </div>
        <div className="img2">
          <img src={process.env.PUBLIC_URL + "/assets/img2.png"} alt="" />
        </div>
        <div className="img3">
          <img src={process.env.PUBLIC_URL + "/assets/img3.png"} alt="" />
        </div>
        <div className="img4">
          <img src={process.env.PUBLIC_URL + "/assets/img4.png"} alt="" />
        </div>
      </div>
      <UseScss01></UseScss01>
    </>
  );
}
