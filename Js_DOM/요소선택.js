console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

//getElemnetById
console.log(document.getElementById("red"));
console.log(document.getElementById("green"));

// getElemnetsByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[1]);

// getElementsByTagName
console.log(document.getElementsByTagName("div")[5]);

// getElemnetsByName
console.log(document.getElementsByName("id")[1]);

//queryselector
/* css에서 사용했던 선택자를 이용해서 요서 선택!
선택자와 일치하는 첫번째요소를 반환 */
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]'));

// querySelectorAll()
const divs = document.querySelectorAll("div");
console.log(divs);
const pinks = document.querySelectorAll(".pink");
console.log(pinks);
console.log(pinks[0]);
console.log(pinks[1]);
console.log(pinks[2]);
console.log(pinks[3]);

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

// for of 문 사용해보기
for (let pink of pinks) {
  console.log(pink);
}
