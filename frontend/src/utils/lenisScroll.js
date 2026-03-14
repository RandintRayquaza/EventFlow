import Lenis from '@studio-freight/lenis';

export const initLenisScroll = () => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.2,
  });

  let frameId = 0;

  const raf = (time) => {
    lenis.raf(time);
    frameId = window.requestAnimationFrame(raf);
  };

  frameId = window.requestAnimationFrame(raf);

  return () => {
    window.cancelAnimationFrame(frameId);
    lenis.destroy();
  };
};