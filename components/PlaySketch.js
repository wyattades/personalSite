import React, { useEffect, useRef } from 'react';
import useAsync from 'react-use/lib/useAsync';

import Link, { GoBackLink } from 'components/Link';
import Layout from 'components/Layout';
import AnimatedItems from 'components/AnimatedItems';

const HEIGHT = 600;
const SRC_DIR =
  'https://github.com/wyattades/personal-site/blob/master/lib/sketches';

const PlaySketch = ({ game }) => {
  const {
    loading,
    error,
    value: modules,
  } = useAsync(async () => {
    const [p5, sketch] = await Promise.all([
      import('p5'),
      import(`lib/sketches/${game.id}`),
    ]);
    return { p5, sketch };
  }, [game.id]);

  const containerRef = useRef();
  const sketchRef = useRef();

  useEffect(() => {
    if (!modules) return;

    const w = containerRef.current.clientWidth;
    // const h = containerRef.current.clientHeight;

    const P5 = modules.p5.default;
    const sketchInstance = new P5(
      (p5) => modules.sketch.default(p5, w, HEIGHT, P5),
      sketchRef.current,
    );

    return () => {
      sketchInstance.remove();
    };
  }, [modules]);

  let content;
  if (error) {
    console.error(error);
    content = <p className="shadowed error">Failed to load game :(</p>;
  } else if (loading)
    content = <div className="loading shadowed" style={{ height: HEIGHT }} />;
  else
    content = (
      <div
        ref={sketchRef}
        className="shadowed"
        style={{ height: HEIGHT, display: 'inline-block', margin: '0 auto' }}
      />
    );

  return (
    <AnimatedItems className="content">
      <GoBackLink href="/projects" />

      <div>
        <h1>{game.title}</h1>
      </div>
      <p>
        <a href={`${SRC_DIR}/${game.id}.js`}>
          <i className="fa fa-code head" aria-hidden />
          Source
        </a>
      </p>
      <div>
        <div ref={containerRef} className="text-center">
          {content}
        </div>
        {game.help && <p className="help">{game.help}</p>}
      </div>
    </AnimatedItems>
  );
};

export default PlaySketch;
