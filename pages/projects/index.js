import React, { useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import * as Animated from 'animated/lib/targets/react-dom';
import { useTimeoutFn } from 'react-use';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import projects from 'lib/projects';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { useReducedMotion } from 'lib/hooks';

const projectItems = projects.filter((p) => !p.noListing);

const ProjectsPage = () => {
  const [state] = useState(() => ({
    animations: projectItems.map(() => new Animated.Value(0)),
    animation: new Animated.Value(0),
  }));

  const disabled = useReducedMotion();
  useTimeoutFn(() => {
    if (!disabled) {
      Animated.stagger(
        100,
        state.animations.map((anim) => Animated.spring(anim, { toValue: 1 })),
      ).start();
      Animated.spring(state.animation, { toValue: 1 }).start();
    }
  }, 375);

  const interp = state.animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['12px', '0px'],
  });
  const style = {
    opacity: state.animation,
    transform: Animated.template`translate3d(0,${interp},0)`,
  };

  return (
    <>
      <NextSeo title="Projects" />

      <Animated.div style={style} className="content">
        <h1>Projects</h1>
        <p>
          Here are some of my noteworthy projects that were mostly created in my
          spare time. You can also view all of them and more on my{' '}
          <a href="https://github.com/wyattades">github</a>.
        </p>
      </Animated.div>
      <TransitionGroup component="div" className="box-list">
        {projectItems.map((p, i) => {
          const interp2 = state.animations[i].interpolate({
            inputRange: [0, 1],
            outputRange: ['12px', '0px'],
          });
          const style2 = {
            opacity: state.animations[i],
            transform: Animated.template`translate3d(0,${interp2},0)`,
          };

          return (
            <Animated.div key={p.id} className="box-link" style={style2}>
              {p.image ? (
                <Image src={p.image} layout="fill" objectFit="cover" alt="" />
              ) : null}
              <Link href={`/projects/${p.id}`}>{p.title}</Link>
            </Animated.div>
          );
        })}
      </TransitionGroup>
    </>
  );
};

ProjectsPage.getLayout = ({ children }) => <Layout>{children}</Layout>;

export default ProjectsPage;
