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
      ".se03._0313 .scrolls .portList li:nth-of-type(1) .flex_ .thumb_p ._tp iframe";
    let iframe2 =
      ".se03._0313 .scrolls .portList li:nth-of-type(2) .flex_ .thumb_p ._tp iframe";
    let iframe3 =
      ".se03._0313 .scrolls .portList li:nth-of-type(3) .flex_ .thumb_p ._tp iframe";
    let iframe4 =
      ".se03._0313 .scrolls .portList li:nth-of-type(4) .flex_ .thumb_p ._tp iframe";
    let iframe5 =
      ".se03._0313 .scrolls .portList li:nth-of-type(5) .flex_ .thumb_p ._tp iframe";

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
    $(".se03._0313 .pin").removeAttr("style");
    $(".se03._0313").removeAttr("style");

    ScrollTrigger.create({
      trigger: ".se03._0313 .pin",
      endTrigger: ".se03._0313",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  },
});
