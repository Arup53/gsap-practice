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

let tl = gsap.timeline();

tl.to(".logo1", {
  x: 1200,
  duration: 1.5,
  delay: 1,
  rotate: 360,
});
tl.to(".logo2", {
  x: 1200,
});
