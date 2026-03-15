import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const runPreloaderAnimation = ({ root, chars, progressFill, onComplete }) => {
    if (!root || !progressFill || !chars?.length) {
        onComplete?.();
        return () => {};
    }

    const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
            defaults: { ease: 'power4.inOut' },
            onComplete: () => {
                onComplete?.();
            },
        });

        // Initial setup
        timeline.set(chars, { yPercent: 100, opacity: 0, scale: 0.8, filter: 'blur(10px)' });
        timeline.set(root, { opacity: 1, backgroundColor: '#030504' });

        timeline
            // Reveal letters and blur out
            .to(chars, { 
                yPercent: 0, 
                opacity: 1, 
                scale: 1, 
                filter: 'blur(0px)', 
                duration: 1.2, 
                stagger: { amount: 0.5, from: "center" } 
            }, 0.2)
            // Progress bar
            .fromTo(progressFill, 
                { width: '0%', opacity: 1 }, 
                { width: '100%', duration: 1.8, ease: 'power3.inOut' }, 
            0.5)
            // Shrink letters into distance
            .to(chars, {
                yPercent: -50,
                opacity: 0,
                scale: 1.1,
                filter: 'blur(20px)',
                duration: 0.8,
                stagger: { amount: 0.2, from: "edges" },
                ease: 'power3.in'
            }, '+=0.4')
            .to(progressFill, { opacity: 0, duration: 0.4 }, '<')
            // Background slide away
            .to(root, { 
                yPercent: -100, 
                opacity: 0, 
                duration: 1.2, 
                ease: 'power4.inOut' 
            }, '-=0.3');
    }, root);

    return () => ctx.revert();
};

export const runHeroRevealAnimation = (scope) => {
    if (!scope) {
        return () => {};
    }

    const ctx = gsap.context(() => {
        gsap.fromTo(
            '[data-hero-glow]',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
        );

        gsap.fromTo(
            '[data-hero-reveal]',
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
                onComplete: () => ScrollTrigger.refresh()
            },
        );
    }, scope);

    return () => ctx.revert();
};

export const initScrollAnimations = () => {
    const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray('[data-scroll-reveal]');
        
        elements.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        });
        
        // Ensure scroll triggers are properly calculated after DOM mutations (React strict rendering)
        ScrollTrigger.refresh();
    });
    
    return () => ctx.revert();
};
