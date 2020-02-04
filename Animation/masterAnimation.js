// -=-=-=-=-=-=-=-=-=-=
// ==== To start my functions in my js ====
// -=-=-=-=-=-=-=-=-=-=

document.addEventListener("DOMContentLoaded", function () {

  var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  tl.to("#title", { x: 100, duration: 1 });
  tl.to("#schedule", { y: 50, duration: 1 });
  tl.to("#addTrain", { opacity: 0, duration: 1 });


});  