function print(a: number, b: number): void {
  console.log(a);
  console.log(b);
}

print(1, 2);
// print(1, 2, 3);
// print(1);

function print2(a: number, b?: number, c?: number): void {
  console.log("-----------print2--------");
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2, 3);
print2(1, 2);
print2(1);
function print3(a: number, b: number, c = 5): void {
  console.log("-----------print3--------");
  console.log(a);
  console.log(b);
  console.log(c);
}

print3(1, 2);
print3(1, 2, 3);

function sayHello(): void {
  console.log("안녕");
}
// void 외에 다른 리턴 타입
// string
function concatStr(a: string, b: string): string {
  return a + b;
}

console.log(concatStr("안녕", " haseyo"));

// number
function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(2));

const squareArea = (a: number, b: number): number => {
  return a * b;
};
console.log(squareArea(3, 4));
const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

console.log(`${triangleArea("2", "4")}`);
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}
const jh: Greet = {
  name: "allie",
  hi() {
    return "hi my name is " + this.name;
  },
  bye(a) {
    return `작별인사를 ${a}번 했습니다.`;
  },
};

console.log(jh.hi());
console.log(jh.bye(5));

// never
function goingon(a: number): never {
  while (true) {
    console.log("go");
    // if (a > 10) break;
  }
}

//오버로딩
/* 오버라이딩 vs. 오버로딩 */
/* 
1. 오버라이딩 overriding
  - 클래스의 상속에서의 개녕
  - 항위 클래스가 사우이 클래스에게 상속 받을 때 , 메소드를 '재정의' 하는 방법
  - 상위 클래스와 같은 이름의 메소드를 사용하지만 다른 내용으로 사용 가능합니다.
  
  
2. 오버로딩
  - 함수에서 매개변수의 개수와 타입이 다를 수 있음
  - 함수의 리턴 타입이 다를 수 있음
  - 같은 이름으로 매개변수의 종류와 개수를 다르게 선언할 수 있음.
  (비슷한 기능일 때만 사용 가능)
  */

// function add(x: number | string, y: number | string): number | string {
//   return x + y;
// }
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any) {
  return x + y;
}

console.log(add("hello", "world"));
console.log(add(10, 10));
// console.log(add("2", 10)); // error!
