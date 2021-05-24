import useMedia from 'react-use/lib/useMedia';

export const useReducedMotion = () => {
  return useMedia('(prefers-reduced-motion)');
};
