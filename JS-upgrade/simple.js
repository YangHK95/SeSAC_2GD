//전자연산자
//1-1 숫자열에 접근해보기
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];
console.log(arr1);
console.log(arr2);
// let 이름 of 배열
for (let el of arr1) {
  console.log(el);
}
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
console.log(...arr1);
console.log(...arr2);
// spread
console.log(...[2, 3, 4]);

//일반적으로 배열 합치는 법 , concat 배열을 연결해줌
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);

//1-2 문자열에 접근해보기
const str = "alliehigh"; //['a','l','l','i','e','h','i','g','h']
let strToArr = str.split("");
console.log(strToArr);
let strToArr2 = [...str];
console.log(strToArr2);
// split('') : string to arr (split의 매개변수로 들어가는 문자열을 기준으로 배열로 변경)
// join() : arr to string

console.log(str);
for (let el of str) {
  console.log(el); // 문자열로도 배열처럼 접근 가능
}

// 1-3. 오브젝트에 전개연산자 사용하기

let me1 = {
  name: "allie",
  height: 163,
  married: false,
  friend: null,
};
let me2 = {
  name: "진형",
  like: ["sleeping", "놀기"],
  friend: {
    name: "지윤님",
    hate: ["바퀴벌레", "매미"],
  },
  greeting: function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고요, 키는${this.height}입니다.`
    ); // 내에 오브젝트를 고를때는 this
  },
};

let me = {
  ...me1,
  ...me2, //겹치는건 아래 오브젝트가 우선
  gender: "F", //추가내용
};
console.log(me);
console.log(me.name);
me.greeting();

//실습
const word1 = "abc";
const word2 = "xyz";
let strToArr3 = word1.split("");
let strToArr4 = word2.split("");
console.log(strToArr3);
console.log(strToArr4);
const word3 = strToArr3.concat(strToArr4);
console.log(word3);
const word4 = [...word1, ...word2];
console.log(word4);
// leader 님 코딩
// const word1 = "abc";
// const word2 = "xyz";
// // ["a", "b", "c", "d", "e", "f"];
// const wordArr = [...word1, ...word2];
// const wordArr2 = (word1 + word2).split("");
// const wordArr3 = word1.split("").concat(word2.split(""));

// console.log(wordArr);
// console.log(wordArr2);
// console.log(wordArr3);
// --------------------------------------------------------------------------------
// 2. 구조 분해 할당
//2-1 배열의 구조 분해 할당
const arr5 = ["tomato", "kiwi", "banana"];
const [val1, kiwi, banana] = arr5;
console.log(val1);
//const val1 = arr5[0]
//const kiwi = arr5[1]
//const banana = arr5[2]

const arr6 = ["빨강", "주황", "노랑", "분홍"];
const [red, orange, , pink] = arr6;
// 요소보다 선언된 변수의 갯수가 많아도
// error가 발상하지 않아요!undefined!
const [v1, v2, v3, v4, v5 = "green"] = arr6;

console.log(pink);
console.log(v5);
//변수 교환해보기 -> value1 <->value2 교환하기
let value1 = "second";
let value2 = "first";

//value1 = value2; // v1 = first
//value2 = value1; // v2 = first

let temp; // 빈함수 가져오기
temp = value1;
value1 = value2;
value2 = temp;
console.log(value1, value2);
//구조 분해 할당을 이용해서 교환하기
value1 = "second";
value2 = "first";
[value1, value2] = [value2, value1];
console.log(value1, value2);

//2-2 오브젝트의 구조 분해 할당
let obj = {
  title: "제목",
  content: "내용",
  num: 0,
};
//title에 접근하는 방법
console.log(obj.title);
console.log(obj["title"]);
//
const { num, content, title } = obj;
console.log(num);
console.log(content);
console.log(title);
// key와 다른 이름으로 할당하는 방법
const { title: t2, content: c2, num: n2 } = obj;
console.log(t2);
//key5,key2를 제외한 나머지 key들을 obj2로 모아서 저장된다.
const { key5, key2, ...obj2 } = {
  key1: "v1",
  key2: 2,
  key3: "v3",
  key4: "v4",
  key5: 5,
};

console.log(key2, key5);
console.log(obj2);

/* ...rest*/
function test(...val) {
  const [a, b, c, ...rest] = val; //[1,2,3,4,5,6] 하면 a=1 b=2 c=3 rest =  4,5,6
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}
test(1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6);

//quiz
//매개변수가 몇 개 들어오든 합해주는 함수 addNumber
function addNumber(...val) {
  let sum = 0;
  // const [...rest] = val;
  // console.log(rest);
  for (let i = 0; i < val.length; i++) {
    // sum += i + 1;
    sum = sum + val[i];
  }
  console.log(sum);
  // return sum;
}
addNumber(1, 2, 3, 4, 10);

//leader님 코딩
function addNumber2(...arr) {
  console.log(arr);
  let sum = 0;
  arr.forEach((el) => {
    sum = sum + el;
  });
  return sum;
}
console.log(addNumber2(1, 2, 3, 100, 5));
const result = addNumber2(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(result);

function introduce(name, like = "빵", hate, gootAt) {
  console.log(`내 이름은 ${name}입니다`);
  console.log(`좋아하는 것은 ${like}입니다`);
  console.log(`싫어하는 것은 ${hate}입니다`);
  console.log(`저는 ${gootAt}을 잘합니다.`);
}
