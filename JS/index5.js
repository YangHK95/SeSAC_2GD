/* 
자바스크립트가 기본적으로 가지고 있는 개체
String, Number , Array, Date, Math, Object, ... 
*/

// Date 객체
// 시간, 날짜정보를 얻을 때 사용
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth(), "월"); // 0~11(7월이면 6)
console.log(now.getDate(), "일"); // 1~31
console.log(now.getHours(), "시"); // 0(자정)~ 23
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); // 0(일)~6(토)

// Date 객체를 이용해서 오늘 요일을 얻고
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
//if
const day = new Date().getDay;
if (day === 0 || day === 6) {
  console.log("주말");
} else {
  console.log("평일");
}
// switch
switch (day) {
  case 0:
  case 6:
    console.log("주말");
    break;
  default:
    console.log("평일");
    break;
}
// 삼항연산자
console.log(day === 0 || day === 0 ? "주말" : "평일");

//let now = new Date();
let past = new Date(2020, 1, 13);
// new Date(y, m, d, h,m,s)
// 시,분,초가 설정되지 않았을 때는 00:00:00
console.log(past);

/* Math */
// 수학적인 상수나 함수
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

console.log(Math.max(100, -1, 30, -2, 5)); // 들어간 것중 최대값
console.log(Math.min(100, -1, 30, -2, 5)); // 들어간 것중 최소값

console.log(Math.ceil(5.1555)); // 올림
console.log(Math.floor(5.1555)); // 내림
console.log(Math.round(5.1555)); // 반올림

// 난수 생성 -> random number
// 0<= num <1
console.log(Math.random());

// 0<= <10
console.log(Math.floor(Math.random() * 10));
// 0.xxx~9.xxx

// 0<= x<=10 정수 = 0<= x <11
console.log(Math.floor(Math.random() * 11));

// 20<= x <=22 정수  =     20<=x <23
// 0~3
console.log(Math.floor(Math.random() * 3 + 20));

// object
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
