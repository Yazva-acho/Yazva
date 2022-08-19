let FollowBox = "#wrap .js-img";
gsap.set(FollowBox, {
  xPercent: -20,
  yPercent: -20,
  transformOrigin: 'center',
  scale: 0
});

let initialMouseMove = true
let mouseMoved = 0
let timer

window.addEventListener("mousemove", (e) => {
  if (initialMouseMove) {
    initialMouseMove = false

    gsap.to(FollowBox, {
      scale: 1.2,
      stagger: 0.02,
      ease: 'sine.out'
    })
  }


  clearTimeout(timer);

  timer = setTimeout(mouseStopped, 20);

  function mouseStopped() {
    console.log('stopped')

    initialMouseMove = true

    gsap.to(FollowBox, {
      scale: 0,
      stagger: 0.02,
      ease: 'sine.out'
    })
  }

  gsap.to(FollowBox, {
    duration: 0.7,
    overwrite: "auto",
    x: e.clientX,
    y: e.clientY,
    stagger: 0.1,
    ease: "none"
  });
});