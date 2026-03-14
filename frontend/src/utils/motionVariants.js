export const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

export const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -6,
    borderColor: 'rgba(74, 222, 128, 0.85)',
    boxShadow: '0 0 0 1px rgba(74, 222, 128, 0.3), 0 16px 36px rgba(34, 197, 94, 0.22)',
    transition: {
      duration: 0.3,
    },
  },
};