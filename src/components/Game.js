import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedPage from './AnimatedPage';


const SRC_DIR = 'https://github.com/wyattades/personal-site/blob/master/src/sketches';

export default class Game extends React.Component {

  state = {
    loading: true,
    error: null,
  }

  sketchRef = React.createRef();

  componentDidMount() {
    const { game } = this.props;

    Promise.all([import('p5'), import(`../sketches/${game.id}`)])
    .then(([ p5, sketch ]) => {
      
      const w = this.sketchRef.current.clientWidth;
      const h = this.sketchRef.current.clientHeight;
      
      const P5 = p5.default;
      this.sketch = new P5((_p5) => sketch.default(_p5, w, h), this.sketchRef.current);

      this.setState({
        loading: false,
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

    return (
      <AnimatedPage className="content">
        <Link className="goBack" to="/projects/games">←</Link>
        <div>
          <h1>{game.id}</h1>
        </div>
        <p><a href={`${SRC_DIR}/${game.id}.js`}><i className="fa fa-code head"/>Source</a></p>
        <div className={`shadowed ${loading ? 'loading' : ''}`}>
          { error
            ? <p className="error text-center">{error}</p>
            : <div ref={this.sketchRef} style={{ height: 600 }}/>
          }
        </div>
      </AnimatedPage>
    );
  }
}
