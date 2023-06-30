/* if 문 */
//if (조건식){조건식이 참일 때 실행할 문자;}
if (5 < 3) {
  console.log("얍");
}

// let number = Number(prompt("숫자를 입력해주세요!"));
// console.log(typeof number);
// if ~else ...
/*
if(조건){
  //조건이 참일 때 실행할 문장
}else{
  조건이 거짓일 때 실핼할 문장
}
*/

// if (number > 10) {
//   // alert("10보다 큽니다.");
//   console.log("10보다 큼");
// } else {
//   // alert("10이거나, 10보다 작습니다");
//   console.log("10이거나, 10보다 작습니다.");
// }

// if (number > 10) {
//   console.log("10보다 큽니다.");
// } else if (number === 10) {
//   console.log("입력한 수가 10이네요!");
// } else {
//   console.log("10보다 작은수입니다.");
// }

/* 성적 산출 프로그램 */
// 0~100까지의 수 입력
// 91~100 A   <= number <=
// 81~90  B
// 71~80  C
// 61~70  D
// 나머지는 F

// if (number <= 100 && number >= 91) {
//   console.log("A");
// } else if (number >= 81) {
//   console.log("B");
// } else if (number >= 71) {
//   console.log("C");
// } else if (number >= 61) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// if (number >= 20 && number <= 200) {
//   console.log("성인");
// } else if (number >= 17) {
//   console.log("고등학생");
// } else if (number >= 14) {
//   console.log("중학생");
// } else if (number >= 8) {
//   console.log("초등학생");
// } else if (number >= 0) {
//   console.log("유아");
// } else {
//   console.log("인간 이십니까?");
// }

/* if 문 중첩 */

let userId = "user";
let usePw = "1234!";

function login() {
  let inputId = prompt("아이디를 입력해주세요!");
  let inputPw = prompt("패스워드를 입력해 주세요");

  if (userId === inputId) {
    if (userPw === inputPw) {
      alert("로그인 선공!!");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  } else {
    alert("아이디가 틀렸어요");
  }
}

login();
