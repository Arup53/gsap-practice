import { gsap } from "gsap";

// gsap.from(".logo", {
//   y: 20, // Move up and down
//   duration: 2, // Duration of animation
//   repeat: -1, // Infinite loop
//   yoyo: true, // Moves back to original position
//   ease: "sine.inOut", // Smooth easing
// });

// gsap.to(".logo1", {
//   x: 1200,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });
// gsap.to(".logo2", {
//   x: 1200,
//   duration: 1.5,
//   delay: 2.5,
// });

// ---------------- Timeline ----------------------

// let tl = gsap.timeline();

// tl.to(".logo1", {
//   x: 1200,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });
// tl.to(".logo2", {
//   x: 1200,
// });

// ------------------SCROLL TIGGER--------------

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from("#page1 #box1", {
  scale: 0,
  delay: 1,
  duration: 1.5,
  rotate: 360,
});
gsap.from("#page2 #box2", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: "page2 #box2",
});
