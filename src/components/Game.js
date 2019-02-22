import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedPage from './AnimatedPage';


const HEIGHT = 600;
const SRC_DIR = 'https://github.com/wyattades/personal-site/blob/master/src/sketches';

export default class Game extends React.Component {

  state = {
    loading: true,
    error: null,
  }

  sketchRef = React.createRef();
  containerRef = React.createRef();

  componentDidMount() {
    const { game } = this.props;

    // This method doesn't support hot reloading :(
    Promise.all([
      import('p5'),
      import(/* webpackChunkName: "sketches/[request]" */ `../sketches/${game.id}`),
    ])
    .then(([ p5, sketch ]) => {
      this.setState({
        loading: false,
      }, () => {
        const w = this.containerRef.current.clientWidth;
        // const h = this.containerRef.current.clientHeight;
        
        const P5 = p5.default;
        this.sketch = new P5((_p5) => sketch.default(_p5, w, HEIGHT, P5), this.sketchRef.current);
      });
    })
    .catch((err) => {
      console.error(err);
      this.setState({
        error: 'Failed to run sketch :(',
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    if (this.sketch) this.sketch.remove();
  }

  render() {
    const { loading, error } = this.state;
    const { game } = this.props;

    let content;
    if (error) content = <p className="shadowed error">{error}</p>;
    else if (loading) content = <div className="loading shadowed" style={{ height: HEIGHT }}/>;
    else content = <div ref={this.sketchRef} className="shadowed" style={{ height: HEIGHT, display: 'inline-block', margin: '0 auto' }}/>;

    return (
      <AnimatedPage className="content">
        <Link className="goBack" to="/projects/games">←</Link>
        <div>
          <h1>{game.title}</h1>
        </div>
        <p><a href={`${SRC_DIR}/${game.id}.js`}><i className="fa fa-code head"/>Source</a></p>
        <div>
          <div ref={this.containerRef} className="text-center">
            {content}
          </div>
          {game.help && <p className="help">{game.help}</p>}
        </div>
      </AnimatedPage>
    );
  }
}
