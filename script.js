

//gsap 


Shery.mouseFollower();


Shery.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Ruchi",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.10,
  duration: 5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});


Shery.makeMagnet(".magnet-target");



var nav = document.querySelector("#nav")


window.addEventListener("scroll", () => {
  var scroll = window.scrollY
  console.log(typeof (scroll))
  if (scroll >= 50) {
    nav.style.position = 'fixed';
    nav.style.backgroundColor = 'gray';
  }
})

