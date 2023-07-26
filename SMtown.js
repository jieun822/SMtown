window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let rolling = document.getElementById("top");
  rolling.style.transform = "translateX(" + window.pageYOffset / -2 + "px)";
}

//스크롤시 이미지 크게 보이기
gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
gsap.to(".scaleDown", {
  scale: 2.5,
  scrollTrigger: {
    trigger: ".main_animation",
    pin: ".main_animation",
    scrub: 1,
  },
});

ScrollTrigger.matchMedia({
  all: function () {
    let iframe1 =
      ".flow .scrolls .iframe-wrap li:nth-of-type(1) .flex_ .iframe-wrap2 .iframe-main iframe";
    let iframe2 =
      ".flow .scrolls .iframe-wrap li:nth-of-type(2) .flex_ .iframe-wrap2 .iframe-main iframe";
    let iframe3 =
      ".flow .scrolls .iframe-wrap li:nth-of-type(3) .flex_ .iframe-wrap2 .iframe-main iframe";
    let iframe4 =
      ".flow .scrolls .iframe-wrap li:nth-of-type(4) .flex_ .iframe-wrap2 .iframe-main iframe";
    let iframe5 =
      ".flow .scrolls .iframe-wrap li:nth-of-type(5) .flex_ .iframe-wrap2 .iframe-main iframe";

    let vid1 = $(iframe1).attr("src");
    let vid2 = $(iframe2).attr("src");
    let vid3 = $(iframe3).attr("src");
    let vid4 = $(iframe4).attr("src");

    var player1 = new Vimeo.Player($(iframe1));
    var player2 = new Vimeo.Player($(iframe2));
    var player3 = new Vimeo.Player($(iframe3));
    var player4 = new Vimeo.Player($(iframe4));

    player1.pause();
    player2.pause();
    player3.pause();
    player4.pause();

    ScrollTrigger.create({
      trigger: $(iframe1),
      start: "top center",
      onEnter: function () {
        player1.play();
      },
    });

    ScrollTrigger.create({
      trigger: $(iframe2),
      start: "top center",
      onEnter: function () {
        player2.play();
      },
    });

    ScrollTrigger.create({
      trigger: $(iframe3),
      start: "top center",
      onEnter: function () {
        player3.play();
      },
    });

    ScrollTrigger.create({
      trigger: $(iframe4),
      start: "top center",
      onEnter: function () {
        player4.play();
      },
    });
  },
  "(min-width: 1181px)": function () {
    $(".flow .text-wrap").removeAttr("style");
    $(".flow").removeAttr("style");

    ScrollTrigger.create({
      trigger: ".flow .text-wrap",
      endTrigger: ".flow",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  },
});

$("html").on("wheel", function (e) {
  var _scrollTop = window.scrollY || document.documentElement.scrollTop; // 현재 스크롤 위치
  //console.log(_scrollTop);

  // 위로 버튼 이벤트
  if (_scrollTop < 500) {
    $("#btn").css({ fill: "#fff", "background-color": "#000" });
  } else if (_scrollTop < 500) {
    $("#btn").css({ fill: "#fff", "background-color": "#000" });
  }

  if (_scrollTop > 15) {
    $("#btn").css({ fill: "#000", "background-color": "#fff" });
  }
  if (_scrollTop > 2630) {
    $("#btn").css({ fill: "#fff", "background-color": "#000" });
  }
  if (_scrollTop > 9300) {
    $("#btn").css({ fill: "#000", "background-color": "#fff" });
  }
});

const line0 = document.querySelectorAll(".line0 path");
$(window).on("scroll", () => {
  line0.forEach(function (a, idx) {
    let length = a.getTotalLength();
    //console.log(length);
    if (scrollY > 700) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

const line = document.querySelectorAll(".line path");
$(window).on("scroll", () => {
  line.forEach(function (a, idx) {
    let length = a.getTotalLength();
    //console.log(length);
    if (scrollY > 700) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

const line2 = document.querySelectorAll(".line2 path");
$(window).on("scroll", () => {
  line2.forEach(function (a, idx) {
    let length = a.getTotalLength();
    //console.log(length);
    if (scrollY > 10200) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

const arrow = document.querySelectorAll(".arrow path");
$(window).on("scroll", () => {
  arrow.forEach(function (a, idx) {
    let length = a.getTotalLength();
    //console.log(length);
    if (scrollY > 10900) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

// li 이미지 커서 이벤트
$("#introduce_content ul#itroduce_list > li").mousemove(function (e) {
  $(this)
    .find($(".fixed_img"))
    .css({
      top: e.offsetY + "px",
      left: e.offsetX + "px",
      opacity: 1,
    });
});
$("#introduce_content ul#itroduce_list > li").mouseleave(function () {
  $(this).find($(".fixed_img")).css({
    opacity: 0,
  });
});

/* // 마우스 이벤트
$(document).mousemove(function (e) {
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  $(".cursor").css({
    left: mouseX + "px",
    top: mouseY + "px",
  });
});
 */

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");
var iframe = document.querySelectorAll(".iframe-main");
var big = document.querySelectorAll("#big");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

iframe.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

big.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});

$("html").on("wheel", function (e) {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  // 현재 스크롤 위치
  //console.log(scrollTop);

  // 마우스 이벤트
  if (scrollTop > 500) {
    $("#cursor").css({ border: "1px solid #fff" });
    $("#cursor2").css({ "background-color": "#fff" });
  } else if (scrollTop < 500) {
    $("#cursor").css({ border: "1px solid #333" });
    $("#cursor2").css({ "background-color": "#333" });
  }

  if (scrollTop > 2900) {
    $("#cursor").css({ border: "1px solid #333" });
    $("#cursor2").css({ "background-color": "#333" });
  }
  if (scrollTop > 9800) {
    $("#cursor").css({ border: "1px solid #fff" });
    $("#cursor2").css({ "background-color": "#fff" });
  }
});
