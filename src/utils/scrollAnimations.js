// utils/scrollAnimations.js

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const slideFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const slideFromBottom = {
  initial: { y: 50 },
  animate: { y: 0 },
  exit: { y: 50 },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: -10 },
};

export const flipCard = (delay = 0) => ({
  initial: { rotateY: 90, opacity: 0 },  
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: {
      delay,
      type: 'spring',
      stiffness: 150,
      damping: 12,
      mass: 1,
    },
  },
  exit: { rotateY: 90, opacity: 0 }, 
});

