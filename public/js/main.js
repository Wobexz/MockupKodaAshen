import { ParallaxField } from "./components/parallax.js";
const staggerReveal = (targets, options = {}) => {
  gsap.from(targets, {
    y: 28,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    ease: "power3.out",
    ...options
  });
};
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const hero = document.querySelector(".hero");
  if (hero) {
    const bg = hero.querySelector(".hero__bg");
    if (bg) {
      bg.innerHTML = '<div class="spark-layer"></div><div class="spark-layer"></div>';
      new ParallaxField(hero, 22);
      window.addEventListener("pointermove", (event) => {
        const offsetX = (event.clientX / window.innerWidth - 0.5) * 24;
        const offsetY = (event.clientY / window.innerHeight - 0.5) * 24;
        gsap.to(bg, { x: offsetX, y: offsetY, duration: 0.8, ease: "power2.out" });
      });
    }
    const heroPieces = hero.querySelectorAll("[data-hero-stagger], .headline");
    staggerReveal(heroPieces);
    const floating = hero.querySelectorAll("[data-float]");
    floating.forEach((el) => {
      gsap.to(el, { y: -10, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });
  }
  const tiltTarget = document.querySelector("[data-tilt] .character__card");
  if (tiltTarget) {
    const resetTilt = () => gsap.to(tiltTarget, { rotationX: 0, rotationY: 0, transformPerspective: 1e3, duration: 0.8, ease: "power2.out" });
    tiltTarget.parentElement?.addEventListener("pointermove", (event) => {
      const bounds = tiltTarget.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      const rotateY = (x - centerX) / centerX * 12;
      const rotateX = -(y - centerY) / centerY * 12;
      gsap.to(tiltTarget, { rotationX: rotateX, rotationY: rotateY, transformPerspective: 900, duration: 0.6, ease: "power2.out" });
    });
    tiltTarget.parentElement?.addEventListener("pointerleave", resetTilt);
  }
  const revealTargets = gsap.utils.toArray("[data-reveal]");
  revealTargets.forEach((el) => {
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });
  const projects = gsap.utils.toArray("[data-project]");
  projects.forEach((card) => {
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 80%" }
    });
    card.addEventListener("pointerenter", () => gsap.to(card, { scale: 1.01, duration: 0.4, ease: "power2.out" }));
    card.addEventListener("pointerleave", () => gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" }));
  });
  const contactPanel = document.querySelector(".contact__panel");
  if (contactPanel) {
    gsap.from(contactPanel, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: contactPanel, start: "top 85%" }
    });
  }
});
