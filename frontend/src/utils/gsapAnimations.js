import { gsap } from 'gsap';

export const runPreloaderAnimation = ({ root, chars, progressFill, onComplete }) => {
    if (!root || !progressFill || !chars?.length) {
        onComplete?.();
        return () => { };
    }

    const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
            defaults: { ease: 'power3.out' },
            onComplete: () => {
                onComplete?.();
            },
        });

        timeline
            .set(chars, { yPercent: 120, opacity: 0 })
            .fromTo(progressFill, { width: '0%' }, { width: '100%', duration: 1.5, ease: 'power2.inOut' }, 0.15)
            .to(chars, { yPercent: 0, opacity: 1, duration: 0.55, stagger: 0.05 }, 0)
            .to(chars, { yPercent: -120, opacity: 0, duration: 0.42, stagger: 0.025 }, '+=0.2')
            .to(root, { yPercent: -100, duration: 0.75, ease: 'power4.inOut' }, '-=0.1');
    }, root);

    return () => ctx.revert();
};

export const runHeroRevealAnimation = (scope) => {
    if (!scope) {
        return () => { };
    }

    const ctx = gsap.context(() => {
        gsap.fromTo(
            '[data-hero-glow]',
            { opacity: 0, scale: 0.78 },
            { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' },
        );

        gsap.fromTo(
            '[data-hero-reveal]',
            { y: 34, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.12,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
            },
        );
    }, scope);

    return () => ctx.revert();
};