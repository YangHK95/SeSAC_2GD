console.log(window); //js
// console.log($(window)); //jq

console.log(document); //js
// console.log($(document)); //jq

//mouse event
// click
//on은 addEventListener 오 ㅏ같은 의미
$(".p-msg").on("click", function () {
  //   $(this).css("color", "blue"); // this 는 자기 자신을 의미
  $(".p-msh").css("color", "blue");
});

$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

$(".num").click(function () {
  // $(".num").css("color", "yellow");
  $(".num").css("color", "tomato");
});

//js
const nums = document.querySelectorAll(".num");
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    console.log(nums[i]);
    nums[i].style.color = "tomato";
  });
}

// // mouseover
// $(".numbers").on("mousover", () => {
//   $(".numbers").css("background-color", "skyblue");
//   $(".numbers").append("<div>ouseover로 추가된 자식</div>");
// });

// $(".numbers").mouseover(() => {
//   $(".numbers").css("background-color", "pink");
//   $(".numbers").append("<div>ouseover로 추가된 자식</div>");
// });

//hover() : a마우스를 올렸을 때와 떼었을 때 정의
$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

//scroll
// window.addEventListener("scroll", () => {
//   console.log("scroll");
// });

// $(window).scroll(() => {
//   console.log("scroll!!");
// });

/*key event */
// keydown : 키보드가 눌렸을 때!
$(".input-key").keydown(function (e) {
  // console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("up");
  } else if (e.code === "ArrowRight") {
    console.log("right");
  } else if (e.code === "ArrowDown") {
    console.log("down");
  } else if (e.code === "ArrowLeft") {
    console.log("left");
  } else {
    console.log("others");
  }
});

$("#form").submit(function (e) {
  e.preventDefault(); // 이벤트 마기
  const todo = $("#todo").val();
  console.log(todo);
  $(".todos").append(`<li>${todo}</li>`); //ul 에 li를 만들고 추가
  $("#todo").val(""); //input 초기화
});
