export const slider = {
  hidden: { x: '-130%', skew: '45deg' },
  show: {
    x: '100%',
    skew: '0deg',
    transition: { ease: 'easeOut', duration: 1 },
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
};
