import React from 'react';
import { Link } from 'react-router-dom';

import games from './games';


export default [{
  id: 'tely',
  title: 'Tely',
  image: 'https://i.imgur.com/QREInPh.png',
  source: 'https://github.com/wyattades/tely',
  url: 'https://tely.app',
  desc: 'A platform for creating lists of media, integrated with Discord servers! Tely currently supports \
  aggregating and sharing any movie, TV show, or Spotify song.',
}, {
  id: 'daily_learner',
  title: 'Daily Learner',
  image: 'https://i.imgur.com/gcHqW9n.png',
  source: 'https://github.com/wyattades/daily_learner',
  url: 'https://dailylearner.pythonanywhere.com',
  desc: 'A webapp for entering arbitrary data in a way that\'s accessible to anyone. \
  Easily perform analytics and predictions using machine learning. Currently supports \
  two types of Linear Models and a Blackbox Model.',
}, {
  id: 'gameshare',
  title: 'GameShare',
  image: 'https://i.imgur.com/SV7nMhu.gif',
  source: 'https://github.com/wyattades/GameShare',
  url: 'https://gameshare-app.herokuapp.com',
  desc: 'GameShare streamlines the way people play online multiplayer games by letting \
  the players create their own experience. Edit, play, and share games instantly with \
  your friends!',
}, {
//   id: 'inf-p2p',
//   title: 'Infinite World Peer-to-peer Game',
//   source: 'https://github.com/wyattades/inf-p2p',
//   url: 'https://wyattades.github.io/inf-p2p',
//   desc: 'Coming soon...',
// }, {
//   id: 'webpack-boiler',
// }, {
//   id: 'java-to-javascript',
// }, {
  id: 'aggregor',
  title: 'Aggregor',
  image: 'https://i.imgur.com/aGfc6o1.gif',
  source: 'https://github.com/wyattades/aggregor_app',
  url: 'https://aggregor.now.sh',
  desc: 'Aggregor combines other news and social feeds into one infinite-scrolling page. \
  The user can view and manage multiple personal news feeds. This project mainly served as \
  a learning experience and proof of concept for a fully cross-platform react app i.e. the \
  same code-base is used on desktop browser, mobile browser, android, and ios.',
}, {
  id: 'bsoe_map',
  title: 'BSOE Interactive Map',
  image: 'https://i.imgur.com/vQmFxeP.png',
  source: 'https://github.com/wyattades/bsoe_map',
  url: 'https://buildingmaps.soe.ucsc.edu/',
  desc: 'This is a tool for generating interactive floor-map webpages. The example shows \
  UCSC Baskin School of Engineering building maps.',
}, {
  id: 'map_maker',
  title: 'JSON Game-Map Maker',
  image: 'https://i.imgur.com/eFiUQ5K.png',
  source: 'https://github.com/wyattades/json_map_generator',
  url: 'http://wyattades.github.io/json_map_generator',
  desc: 'Create simple maps made of rectangular walls, and output a JSON array (can also \
  generate map using inputted JSON).',
}, {
  id: 'generative-line-art',
  title: 'Generative Line Art',
  image: 'https://i.imgur.com/BMGpRio.png',
  source: 'https://github.com/wyattades/generative-line-art',
  url: 'http://wyattades.github.io/generative-line-art',
  desc: 'Create line art using this simple yet versatile line art generation tool. Export \
  the result as a scalable vector graphic (SVG)!',
}, {
  id: 'orgchart',
  title: 'Organization Chart',
  image: 'https://i.imgur.com/DGZQuQQ.png',
  source: 'https://github.com/wyattades/org-chart-module',
  url: 'https://wyattades.github.io/org-chart-module/',
  desc: 'Create embedded Org Charts using this simple javascript library. These charts have \
  a simplistic material design and are intuitively interactive.',
}, {
  id: 'minshell',
  title: 'MinShell',
  image: 'https://i.imgur.com/I1HK1x1.gif',
  source: 'https://github.com/wyattades/minshell',
  desc: 'A minimalist command-line shell that supports some of the basic features of Bash. \
  Compile the tiny source-code on your OS to try it out!',
}, {
  id: 'games',
  title: 'Games',
  image: 'https://gifimage.net/wp-content/uploads/2018/04/rainbow-gif-10.gif',
  hideImage: true,
  desc: [ 
    <p key="_">Some of the games I've made while learning to code!<br/><br/></p>
  ].concat(games.map((game) => (
    <p key={game.id}>
      🎮 &nbsp;
      { game.url ? <a href={game.url}>{game.title}</a> : <Link to={`/projects/games/${game.id}`}>{game.title}</Link> }
      { game.desc && `: ${game.desc}` }
    </p>
  ))),
}];
