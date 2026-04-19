import gsap from "./gsapConfig";

export const fadeUp = (el) => {
  gsap.fromTo(
    el,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    }
  );
};

export const fadeIn = (el) => {
  gsap.fromTo(
    el,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    }
  );
};