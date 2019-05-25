import React, { useEffect, memo, useRef } from 'react';

import createFluid from '../lib/fluid';

// const useEvent = (watcher, name, listener) => {
//   useEffect(() => {
//     watcher.addEventListener(name, listener);

//     return () => watcher.removeEventListener(name, listener);
//   }, [watcher, name, listener]);
// };

const Fluid = ({ getRandTimeout }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const fluid = createFluid(canvasRef.current);

    let randomTimeoutId;
    if (getRandTimeout) {
      const randomSplash = () => {
        fluid.multipleSplats(Math.floor(Math.random() * 3) + 1);

        randomTimeoutId = setTimeout(
          randomSplash,
          typeof getRandTimeout === 'function'
            ? getRandTimeout()
            : getRandTimeout,
        );
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
