import { useEffect, useMemo, useRef } from 'react';
import { runPreloaderAnimation } from '../../../../utils/gsapAnimations';

const Preloader = ({ onComplete }) => {
  const rootRef = useRef(null);
  const progressRef = useRef(null);
  const charRefs = useRef([]);
  const letters = useMemo(() => 'EventFlow'.split(''), []);

  useEffect(() => {
    const cleanup = runPreloaderAnimation({
      root: rootRef.current,
      chars: charRefs.current,
      progressFill: progressRef.current,
      onComplete,
    });

    return cleanup;
  }, [onComplete]);

  return (
    <div ref={rootRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070b08]">
      <div className="w-full max-w-sm px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[#97af9f]">Loading experience</p>
        <h2 className="mb-8 overflow-hidden font-['Sora'] text-4xl font-semibold leading-none sm:text-5xl">
          {letters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              ref={(element) => {
                charRefs.current[index] = element;
              }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h2>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#163223]">
          <div
            ref={progressRef}
            className="h-full w-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] shadow-[0_0_20px_rgba(34,197,94,0.55)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;