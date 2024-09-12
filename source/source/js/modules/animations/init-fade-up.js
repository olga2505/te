import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const initFadeUp = () => {
  const elements = document.querySelectorAll('[data-fade-up]');

  if (!elements.length) {
    return;
  }

  elements.forEach((el) => {
    const delayValue = el.getAttribute('data-delay') || 0;
    const tl = gsap.timeline({paused: true});


    tl.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      delay: delayValue,
    });

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      animation: tl,
      toggleActions: 'play none none none',
    });
  });
};
