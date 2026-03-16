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
    <div ref={rootRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]">
      <div className="w-full max-w-sm px-8 flex flex-col items-center text-center">
        <h2 className="mb-8 overflow-hidden font-['Sora'] text-5xl font-bold leading-none tracking-tight text-[var(--color-text)]">
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
        <div className="h-1 w-48 overflow-hidden rounded-full bg-[#171717] border border-[#262626]">
          <div
            ref={progressRef}
            className="h-full w-0 rounded-full bg-white shadow-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;