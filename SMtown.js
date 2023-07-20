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
  scale: 2.32,
  scrollTrigger: {
    trigger: ".main_animation",
    pin: ".main_animation",
    scrub: 1,
  },
});
