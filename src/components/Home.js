import React from 'react';

import BlockText from './BlockText';
// import desertTop from '../images/desert-top.png';
// import desertBottom from '../images/desert-bottom.png';

export default () => (
  <div className="layers">
    {/* <img src={desertTop} alt=""/> */}
    {/* <h1 style={{ textAlign: 'center', paddingTop: 250 }}>Personal Website of</h1> */}
    <BlockText text="WYATT"/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ marginTop: 250 }}>PERSONAL SITE</h1>
    </div>
    {/* <img src={desertBottom} alt=""/> */}
  </div>
);
