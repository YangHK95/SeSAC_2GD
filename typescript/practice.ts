let onlimic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// onlimic_newgame[1] = false;
console.log(onlimic_newgame[1]);

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

console.log(heroGame_A);
console.log(heroGame_B);

//--------실스---------
/* 
1. 두개의 '수'를 매개변수로 받고
2. 합을 console.log로 출력 */
function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(1, 2);

/*
1.매개변수로 숫자를 받음, 전개연산자 이용 ->매개변수의 개수가 상관이 없어요.
2.매개변수로 받은 인자의 모든 합을 'return'
*/
function sum2(...num: number[]): number {
  let sum = 0;
  num.forEach((el) => (sum += el));
  return sum;
}

console.log(sum2(1, 2, 3, 4, 5, 10));

// 실습문제
function arrElement<T>(arr: T[], index: number): T | boolean {
  if (arr.length <= index) {
    return false;
  }
  return arr[index];
}

console.log(arrElement<number>([1, 2, 3, 4, 5, 6, 7, 8, 8], 5));
console.log(arrElement<boolean>([true, false], 4));
