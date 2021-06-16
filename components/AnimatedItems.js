import React, { useState } from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { useTimeoutFn } from 'react-use';

import { useReducedMotion } from 'lib/hooks';

const AnimatedItems = ({ children, firstGoLeft, dist = 12, className }) => {
  const [state] = useState(() => ({
    animations: React.Children.map(children, () => new Animated.Value(0)),
  }));

  const disabled = useReducedMotion();
  useTimeoutFn(() => {
    if (!disabled)
      Animated.stagger(
        100,
        state.animations.map((anim) => Animated.spring(anim, { toValue: 1 })),
      ).start();
  }, 375);

  if (disabled)
    return React.Children.map(children, (item, i) => <div key={i}>{item}</div>);

  return (
    <TransitionGroup component="div" className={className}>
      {React.Children.map(children, (item, i) => {
        const left = i === 0 && firstGoLeft;

        const anim = state.animations[i];

        const interp = anim.interpolate({
          inputRange: [0, 1],
          outputRange: [dist, 0],
        });
        const style = {
          opacity: anim,
          transform: Animated.template`translate3d(${left ? interp : 0}px,${
            left ? 0 : interp
          }px,0)`,
        };

        return (
          <Animated.div style={style} key={i}>
            {item}
          </Animated.div>
        );
      })}
    </TransitionGroup>
  );
};

export default AnimatedItems;
