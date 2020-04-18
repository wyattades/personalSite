import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import * as Animated from 'animated/lib/targets/react-dom';

import projects from '../projects';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: projects.map(() => new Animated.Value(0)),
      animation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this._animateIn();
  }

  _goToProject = (id) => () => {
    this.props.history.push(`/projects/${id}`);
  };

  _animateIn() {
    setTimeout(() => {
      Animated.stagger(
        100,
        this.state.animations.map((anim) =>
          Animated.spring(anim, { toValue: 1 }),
        ),
      ).start();
      Animated.spring(this.state.animation, { toValue: 1 }).start();
    }, 375);
  }

  render() {
    const interp = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['12px', '0px'],
    });
    const style = {
      opacity: this.state.animation,
      transform: Animated.template`translate3d(0,${interp},0)`,
    };

    return (
      <div className="page">
        <Animated.div style={style} className="content">
          <h1>Projects</h1>
          <p>
            Here are some of my noteworthy projects that were mostly created in
            my spare time. You can also view all of them and more on my{' '}
            <a href="https://github.com/wyattades">github</a>.
          </p>
        </Animated.div>
        <TransitionGroup component="div" className="box-list">
          {projects.map((p, i) => {
            const interp2 = this.state.animations[i].interpolate({
              inputRange: [0, 1],
              outputRange: ['12px', '0px'],
            });
            const style2 = {
              opacity: this.state.animations[i],
              transform: Animated.template`translate3d(0,${interp2},0)`,
              backgroundImage: `url("${p.image}")`,
            };

            return (
              <Animated.div
                key={p.id}
                className="box-link"
                style={style2}
                onClick={this._goToProject(p.id)}
              >
                {p.title}
              </Animated.div>
            );
          })}
        </TransitionGroup>
      </div>
    );
  }
}
