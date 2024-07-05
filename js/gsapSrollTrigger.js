gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.website-section').forEach(section => {
  const elems = section.querySelectorAll('.js-content-opacity');

  gsap.set(elems, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    overwrite: 'auto',
  });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 60%',
    end: 'bottom 30%',
    markers: true,
    onEnter: () => gsap.to(elems, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
    }),
    onLeave: () => gsap.to(elems, {
      y: -50,
      opacity: 0,
      stagger: 0.2,
    }),
    onEnterBack: () => gsap.to(elems, {
      opacity: 1,
    }),
    onLeaveBack: () => gsap.to(elems, {
      opacity: 1,
    }),
  });
})

gsap.utils.toArray('.website-section2').forEach(section => {
  const elems = section.querySelectorAll('.js-content-opacity2');

  gsap.set(elems, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    overwrite: 'auto',
  });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 60%',
    end: 'bottom 30%',
    markers: true,
    onEnter: () => gsap.to(elems, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
    }),
    onLeave: () => gsap.to(elems, {
      y: -50,
      opacity: 0,
      stagger: 0.2,
    }),
    onEnterBack: () => gsap.to(elems, {
      opacity: 1,
    }),
    onLeaveBack: () => gsap.to(elems, {
      opacity: 1,
    }),
  });
})

gsap.to(".rotating-bubbles", { rotation: 1440 });
gsap.to(".rotating-bubbles", {
  scrollTrigger: {
    trigger: ".transform-bubbles",
    scrub: 1,
    start: 'top bottom',
    end: '+=5000',
  },
  rotation: 1440,
  duration: 3,
  ease: 3,
})