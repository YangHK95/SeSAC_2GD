// 오브젝트 생성
/*
속성
  만들어진 연도 year
  집의 이름 name
  창문의 갯수 window
함수
  만들어진 연도를 콘솔창에 출력하는 "건물의 나이"
  창문의 갯수를 콘솔창에 출력하는 함수
 */

class House {
  constructor(year, name, window) {
    this.name = name;
    this.year = year;
    this.window = window;
  }
  getAge() {
    console.log(`${this.name}은 건축한지 ${2023 - this.year}지났어요`);
  }
  getWindow() {
    console.group(`${this.name}의 창문은 ${this.window}개 입니다.`);
  }
}
//키 만들자!
const house1 = new House(1789, "old", 1);
console.log(house1);
house1.getAge();
house1.getWindow();

const house2 = new House(2022, "자이", 10);
house2.getAge();
house2.getWindow();

console.log("----상속----");
/*
추가 속성
  층수 floor
  창문 제조업체 windowMaker
추가 함수
  aptInfo() 아파트 정보를 나타내는 메소드
  
  */
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window); //상속받은 것들
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}에 지워진 ${this.name}.
    총 층수는 ${this.floor}, 창문의 갯수는 ${this.window}`;
  }

  //  overriding 부모 함수를 받아쓰고 싶지만 변경하고 싶을때
  getWindow() {
    return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker}에서 만들었습니다.`;
  }
}
const apt1 = new Apartment(2020, "raemian", 6, 19, "KCC");
console.log(apt1.getAptInfo());
apt1.getAge();
// apt1.getWindow();
console.log(apt1.getWindow());
