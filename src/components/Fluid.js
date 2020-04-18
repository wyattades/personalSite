import React, { useEffect, memo, useRef } from 'react';

import createFluid from '../lib/fluid';

// const useEvent = (watcher, name, listener) => {
//   useEffect(() => {
//     watcher.addEventListener(name, listener);

//     return () => watcher.removeEventListener(name, listener);
//   }, [watcher, name, listener]);
// };

const Fluid = ({ getSplashInfo }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const fluid = createFluid(canvasRef.current);

    let randomTimeoutId;
    if (getSplashInfo) {
      let iteration = 0;
      const randomSplash = () => {
        const { amount, timeout, moveAmount } = getSplashInfo(iteration++);

        fluid.multipleSplats(amount, moveAmount);

        randomTimeoutId = setTimeout(randomSplash, timeout);
      };
      randomTimeoutId = randomSplash();
    }

    return () => {
      if (randomTimeoutId) clearTimeout(randomTimeoutId);

      fluid.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="fluid-canvas" />;
};

export default memo(Fluid);
