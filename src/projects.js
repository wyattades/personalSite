import React from 'react';
import { Link } from 'react-router-dom';

import games from './games';

export default [
  {
    id: 'vanly',
    title: 'Vanly',
    url: '//vanly.app',
    image: '//i.imgur.com/vh4DegJ.png',
    desc:
      'A platform for people sleeping in their vehicles to find overnight parking',
  },
  {
    id: 'megabyte',
    title: 'MegaByte',
    url: '//triplebyte.github.io/megabyte-game',
    image: '//i.imgur.com/QILMfvT.png',
    desc:
      'A quick platformer where you answer coding questions. Made during a Triplebyte hackathon',
  },
  {
    id: 'wing-it-online',
    title: 'Wing It - Online',
    url: '//wing-it-beyond.netlify.app',
    image: '//i.imgur.com/LFnPjU2.png',
    desc: 'Online version of the card-game "Wing It Beyond"',
  },
  {
    id: 'fant-cont',
    title: 'Fant Cont',
    source: '//github.com/wyattades/fantastic_contraption',
    url: '//wyattades.github.io/fantastic_contraption',
    image: '//i.imgur.com/8Z1QZQm.png',
    desc: 'A sandbox physics game where you build rediculous machines',
  },
  {
    id: 'tely',
    title: 'Tely',
    image: '//i.imgur.com/QREInPh.png',
    source: '//github.com/wyattades/tely',
    url: '//tely.app',
    desc:
      'A platform for creating lists of media, integrated with Discord servers! Tely currently supports \
  aggregating and sharing any movie, TV show, or Spotify song.',
  },
  {
    id: 'generative-line-art',
    title: 'Generative Line Art',
    image: '//i.imgur.com/BMGpRio.png',
    source: '//github.com/wyattades/generative-line-art',
    url: 'http://wyattades.github.io/generative-line-art',
    desc:
      'Create line art using this simple yet versatile line art generation tool. Export \
  the result as a scalable vector graphic (SVG)!',
  },
  {
    id: 'webpack-boiler',
    title: 'webpack-boiler',
    source: '//github.com/wyattades/webpack-boiler',
    url: '//www.npmjs.com/package/webpack-boiler',
    desc:
      'Webpack configuration boilerplate. Great for easily configuring React or vanilla Progressive Web Apps',
  },
  {
    id: 'java-to-javascript',
    title: 'Java to Javascript',
    source: '//github.com/wyattades/java-to-javascript',
    url: '//www.npmjs.com/package/java-to-javascript',
    desc: 'Convert Java Classes to ES6 Classes',
    // }, {
    //   id: 'inf-p2p',
    //   title: 'Infinite World Peer-to-peer Game',
    //   source: '//github.com/wyattades/inf-p2p',
    //   url: '//wyattades.github.io/inf-p2p',
    //   desc: 'Check out the live',
  },
  {
    id: 'gameshare',
    title: 'GameShare',
    image: '//i.imgur.com/SV7nMhu.gif',
    source: '//github.com/wyattades/GameShare',
    url: '//gameshare-app.herokuapp.com',
    desc:
      'GameShare streamlines the way people play online multiplayer games by letting \
  the players create their own experience. Edit, play, and share games instantly with \
  your friends!',
  },
  {
    id: 'daily_learner',
    title: 'Daily Learner',
    image: '//i.imgur.com/gcHqW9n.png',
    source: '//github.com/wyattades/daily_learner',
    url: '//dailylearner.pythonanywhere.com',
    desc:
      "A webapp for entering arbitrary data in a way that's accessible to anyone. \
  Easily perform analytics and predictions using machine learning. Currently supports \
  two types of Linear Models and a Blackbox Model.",
  },
  {
    id: 'aggregor',
    title: 'Aggregor',
    image: '//i.imgur.com/aGfc6o1.gif',
    source: '//github.com/wyattades/aggregor_app',
    url: '//aggregor.now.sh',
    desc:
      'Aggregor combines other news and social feeds into one infinite-scrolling page. \
  The user can view and manage multiple personal news feeds. This project mainly served as \
  a learning experience and proof of concept for a fully cross-platform react app i.e. the \
  same code-base is used on desktop browser, mobile browser, android, and ios.',
  },
  {
    id: 'bsoe_map',
    title: 'BSOE Interactive Map',
    image: '//i.imgur.com/vQmFxeP.png',
    source: '//github.com/wyattades/bsoe_map',
    url: '//buildingmaps.soe.ucsc.edu/',
    desc:
      'This is a tool for generating interactive floor-map webpages. The example shows \
  UCSC Baskin School of Engineering building maps.',
  },
  {
    id: 'map_maker',
    title: 'JSON Game-Map Maker',
    image: '//i.imgur.com/eFiUQ5K.png',
    source: '//github.com/wyattades/json_map_generator',
    url: 'http://wyattades.github.io/json_map_generator',
    desc:
      'Create simple maps made of rectangular walls, and output a JSON array (can also \
  generate map using inputted JSON).',
  },
  {
    id: 'orgchart',
    title: 'Organization Chart',
    image: '//i.imgur.com/DGZQuQQ.png',
    source: '//github.com/wyattades/org-chart-module',
    url: '//wyattades.github.io/org-chart-module/',
    desc:
      'Create embedded Org Charts using this simple javascript library. These charts have \
  a simplistic material design and are intuitively interactive.',
  },
  {
    id: 'minshell',
    title: 'MinShell',
    image: '//i.imgur.com/I1HK1x1.gif',
    source: '//github.com/wyattades/minshell',
    desc:
      'A minimalist command-line shell that supports some of the basic features of Bash. \
  Compile the tiny source-code on your OS to try it out!',
  },
  {
    id: 'games',
    title: 'Other Games',
    image: '//gifimage.net/wp-content/uploads/2018/04/rainbow-gif-10.gif',
    hideImage: true,
    desc: [
      <p key="_">
        Some of the games I've made while learning to code!
        <br />
        <br />
      </p>,
    ].concat(
      games.map((game) => (
        <p key={game.id}>
          🎮 &nbsp;
          {game.url ? (
            <a href={game.url}>{game.title}</a>
          ) : (
            <Link to={`/projects/games/${game.id}`}>{game.title}</Link>
          )}
          {game.desc && `: ${game.desc}`}
        </p>
      )),
    ),
  },
];
