gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3, // animation을 3회 추가하는 것
  yoyo: true, // 왕복 시켜줌
  ease: "linner",
  ease: "bounce.inOut",
  ease: "power1.out",
});

const staggerAll = document.querySelectorAll(".stagger");
console.log(staggerAll);
// from.to의 target으로는 배열 형태가 와도 됨
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 1.5, // 요소가 여러개 있을때 순서대로 적용되게 하는 것
  repeat: -1,
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
});

/* timeline 사용 */
// 연속적인 애니메이션을 만들기 위해서 사용

let tl = gsap.timeline();

// tl.to(".skyblue", {
//   x: 400,
//   duration: 2,
// });
// tl.to(".gray", {
//   x: 500,
//   duration: 2,
// });
// tl.to(".yellow", {
//   x: 600,
//   duration: 3,
// });
tl.to(".skyblue", {
  x: 400,
  duration: 2,
})
  .to(
    ".gray",
    {
      x: 500,
      duration: 2,
    },
    "<" //skyblue랑 gray를 같이 움직이게 해주는 것 , 이전의 것과 함께 움직이는 것
  )
  .to(
    ".yellow",
    {
      x: 600,
      duration: 3,
    },
    "+=5" // 앞에 모든 동작이 끝난 후 동작하게 해주는 것
  );

/*
    to/from 의 세 번째 미개변수
    - 2(숫자) : 전체 타임라인에 대해서 ~ 초 뒤에 시작한다는 의미
            (absoloutely)
    - "<" : 이전 움직임과 동시에 시작
    - "+=2" : 마지막에 끝난 움직임보다 ~초 뒤에 시작하겠다.
  
  */
