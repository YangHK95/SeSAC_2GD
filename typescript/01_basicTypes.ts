// 1. unmber type
let num: number = 1;
num = 2;

//2. string type
let str1: string = "안녕하세요";
console.log(str1, num);

// boolean,null,undefined
let isTrue: boolean = true;
let undef: undefined;
const empty: null = null;

// 4. object
const obj1: object = {
  name: "allie",
};

// 5.array
let numArr: number[] = [1, 2, 3, 4];
let arr2: string[] = ["a", "b"];
let arr3: Array<string> = ["a", "b"];

let arr4: Array<string | number> = [1, 2, 3, 4, "apple", "kiwi"];
let arr5: (string | number)[] = [1, 2, 3, 4, "apple", "kiwi"];

// boolean, null, number arr가 요소로 들어가는 배열 arr6
// const arr6<boolean | null | number[]>= [true,null,[1,2,3]]
let arr6: (boolean | null | number[])[] = [true, null, [1, 2, 3, 4]];
console.log(arr6[0]);
arr6[1] = [5, 6, 7];
// arr6[2]= "str"; // 선언할 때 부여한 type이 아니라면 (string) 오류를 보여줌
let arrAny: any[] = [1, 2, "apple", null, true, undefined];
