import React from 'react';

import Layout from 'components/Layout';
import Link from 'components/Link';
import games from 'lib/games';

import ShowProjectPage from './[project_id]';

const GamesPage = () => {
  return (
    <ShowProjectPage
      project={{
        id: 'games',
        title: 'Other Games',
        image:
          'https://gifimage.net/wp-content/uploads/2018/04/rainbow-gif-10.gif',
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
                <Link href={`/projects/${game.id}`}>{game.title}</Link>
              )}
              {game.desc && `: ${game.desc}`}
            </p>
          )),
        ),
      }}
    />
  );
};

GamesPage.getLayout = ShowProjectPage.getLayout;

export default GamesPage;
