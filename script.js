gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar h1", {
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".navbar nav ul li", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.2,
});

gsap.from(".navbar .btn", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power3.out",
  delay: 0.5,
});

gsap.from(".hero .left img", {
  opacity: 0,
  x: -100,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".hero .right h2", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out",
  delay: 0.5,
});

gsap.from(".hero .right h3", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out",
  delay: 0.8,
});

gsap.from(".hero .right p", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power3.out",
  delay: 1,
});

gsap.from(".hero .right .btn button", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.2,
  delay: 1.2,
});

document.querySelector(".ri-menu-line").addEventListener("click", () => {
  const navItems = document.querySelector(".navbar ul");
  navItems.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".services", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".service-item", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.3,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".contact input, .contact textarea, .contact button", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
  stagger: 0.2,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".features", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
  },
});

gsap.from(".feature-item", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.3,
});
