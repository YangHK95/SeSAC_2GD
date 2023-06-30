/* 함수 선언문
 function 함수이름(매개변수){
  함수내용;
 }
 함수이름은 camelCase를 이용!
*/
helloWorld();
console.log("-------");

function helloWorld() {
  console.log("hello world1");
}

helloWorld();

function helloWorld2() {
  return "hello world2";
}
// return -함수의 반환값, 함수 내부 코드의 '최종값'
console.log(helloWorld2());

function add(num1, num2) {
  console.log(num1 + num2);
}
function add2(num1, num2) {
  console.log("여기만 실행됩니다.");
  return num1 + num2;
  console.log("여기는 실행되지 않아요");
}
add(5, 10);
add2(3, 2);

// helloWorld3();
// 함수 표현식은 선언 이후에 호줄해주어야 합니다.
// 함수 표현식
const helloWorld3 = function () {
  console.log("helloWorld3");
};
helloWorld3();

// 화살표함수 == 함수표현식
// console.log(helloWorld4());

const helloWorld4 = () => {
  return "helloWorld4!!";
};
console.log(helloWorld4());

/* 매개변수가 있는 함수 */
function sayHello1(name) {
  return "안녕하세요 " + name + " 님";
}
console.log(sayHello1("희광"));

function sayHello2(text, name) {
  console.log(`${text}!! ${name}님`);
}
let 안녕 = " 안녕하세요";
sayHello2(안녕, " allie");

let sayHello3 = function (text, name) {
  console.log(`${text}!! ${name}님`);
};
sayHello3(안녕, " allie");

function multifly(num1, num2) {
  console.log(num1 * num2);
  return num1 * num2;
}
console.log(multifly(3, 7));
console.log(multifly(2, 2));

function square(num1) {
  console.log(num1 ** 2);
}

square(4);
square(11);
square(5);

function test(a, b) {
  a = a + 1;
  b = b + 1;
  console.log(a + b);
  return 5;
}
test(0, 0) == 5; // 콘솔창엔 2가 찍히지만
console.log(test(0, 0));
