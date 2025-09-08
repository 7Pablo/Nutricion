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

export const flipCardVertical = (delay = 0) => ({
  initial: { rotateX: 90, opacity: 0 },  
  animate: {
    rotateX: 0,
    opacity: 1,
    transition: {
      delay,
      type: 'spring',
      stiffness: 150,
      damping: 12,
      mass: 1,
    },
  },
  exit: { rotateX: 90, opacity: 0 }, 
});

export const fallingLeafAnim = {
  initial: { opacity: 0, y: -100, x: 0, rotate: 0 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    x: [0, 15, -10, 0], 
    rotate: [0, 10, -5, 0], 
    transition: {
      delay: i * 0.2,
      duration: 1.5,
      ease: "easeOut"
    }
  }),
  exit: { opacity: 0, y: -100, transition: { duration: 0.5 } }
};

export const fallingLeafAnimReverse = {
  initial: { opacity: 0, y: -100, x: 0, rotate: 0 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    x: [0, -15, 10, 0],
    rotate: [0, -10, 5, 0], 
    transition: {
      delay: i * 0.2, 
      duration: 1.5,
      ease: "easeOut"
    }
  }),
  exit: { opacity: 0, y: -100, transition: { duration: 0.5 } }
};

export const bouncyRise = (delay = 0) => ({
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1, 
    transition: {
      delay,
      type: 'spring',
      stiffness: 120,
      damping: 12,
      mass: 1,
    },
  },
  exit: { opacity: 0, y: 50, scale: 0.95 },
});

export const tickerFadeInUp = {
  initial: { opacity: 0, y: 40 },   
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  },
  exit: { opacity: 0, y: 40 },     
};

export const riseFromBottom = (delay = 0) => ({
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: [80, -10, 0], 
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: 80,
    transition: { duration: 0.5, ease: "easeIn" }
  }
});

export const bouncingBall = (delay = 0) => ({
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: [ -50, 20, -10, 0 ], 
    transition: {
      delay,
      duration: 1.2,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
});
