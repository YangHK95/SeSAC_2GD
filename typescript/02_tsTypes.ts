// tuple
/*
 tuple = 배열
- 길이와 타입이 지정되어있는 배열.
 */

let drink: [string, string] = ["콜라", "사이다"];
drink[0] = "cola";
console.log(drink);

// drink[1]=2; string 요소를 number 로 바꾸려고 하면 error!
drink.push("str");
console.log(drink);

let drink2: readonly [string, number] = ["콜라", 2500];
// drink2.push("사이다"); //readonly 새로운 요소 추가 error!
// drink2[0] = "cola"; // readonly 요소 변경 error!
console.log(drink2[0]);
console.log(drink2[1]);

/* enum */
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}
console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla = 11,
  strawberry,
  kiwi = "kiwi",
}
console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);

/* interface & type */
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "jh",
  isPassed: false,
};
type Score = "A+" | "A" | "B" | "C" | "D" | "F";
interface 야구부 extends Student {
  positinon: string;
  weight: number;
  height: number;
  backNumber?: number;
  [grade: number]: Score;
}

const otani: 야구부 = {
  name: "오타니",
  isPassed: true,
  positinon: "pitcher",
  weight: 95.3,
  height: 193,
  1: "A",
  2: "A+",
  3: "F",
};

otani.positinon = "투수";
otani["1"] = "B";
console.log(otani);
// otani

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {
    {
      console.log("이름은" + this.name + "입니다.");
    }
  },
  color: "blue",
  price: 50000,
};

toyCar.start();

type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: "daniel",
  gender: "Female",
  age: 20,
};
type Gender = "Male" | "Female";
type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};

let albert: Person2 = {
  name: "albert",
  gender: "Male",
};

console.log(albert);
