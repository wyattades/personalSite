import React from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class AnimatedPage extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      animations: props.items.map(() => new Animated.Value(0)),
    };
  }

  componentDidMount() {
    this._animateIn();
  }

  _animateIn() {
    setTimeout(() => {
      Animated.stagger(
        100,
        this.state.animations.map(anim =>
          Animated.spring(anim, { toValue: 1 })),
      ).start();

    }, 375);
  }

  render() {
    const { label = '', items, firstGoLeft, dist = 12, ...rest } = this.props;

    return (
      <div className={`container page ${label}`}>
        <div {...rest}>
          <TransitionGroup component="div">
            {items.map((item, i) => {
              const left = i === 0 && firstGoLeft;

              const interp = this.state.animations[i].interpolate({
                inputRange: [0, 1],
                outputRange: [dist, 0],
              });
              const style = {
                opacity: this.state.animations[i],
                transform: Animated.template`translate3d(${left ? interp : 0}px,${left ? 0 : interp}px,0)`,
              };

              return (
                <Animated.div style={style} key={i}>
                  {item}
                </Animated.div>
              );

            })}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
