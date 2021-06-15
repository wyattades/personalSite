import React from 'react';
import Image from 'next/image';

import Layout from 'components/Layout';
import projects from 'lib/projects';
import PlaySketch from 'components/PlaySketch';
import Link, { GoBackLink } from 'components/Link';
import AnimatedItems from 'components/AnimatedItems';

export const getStaticProps = async ({ params: { project_id } }) => {
  const project = projects.find((p) => !p.noPage && p.id === project_id);

  if (!project)
    return {
      notFound: true,
    };

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: projects
      .filter((p) => !p.noPage)
      .map((p) => ({
        params: { project_id: p.id },
      })),
    fallback: false,
  };
};

const ShowProjectPage = ({ project }) => {
  if (project.p5Sketch) return <PlaySketch game={project} />;

  const {
    title,
    desc,
    download,
    url,
    source,
    image,
    imageAspectRatio: iar,
    hideImage,
  } = project;

  const isNPM = !!url?.includes('npmjs.com');

  return (
    <AnimatedItems className="content" firstGoLeft dist={24}>
      <GoBackLink href="/projects" />
      <h1>{title}</h1>
      {download && (
        <p>
          <a href={download}>
            <i className="fa fa-cloud-download head" aria-hidden />
            Download Link
          </a>
        </p>
      )}
      {url && (
        <p>
          <a href={url}>
            <i className="fa fa-link head" aria-hidden />
            {isNPM ? 'NPM Package' : 'Live Website'}
          </a>
        </p>
      )}
      {source && (
        <p>
          <a href={source}>
            <i className="fa fa-code head" aria-hidden />
            Source
          </a>
        </p>
      )}
      {!hideImage && image && (
        <div className="shadowed" style={{ marginBottom: '2rem' }}>
          <Image
            width={800}
            height={iar ? 800 * iar : 600}
            objectFit="cover"
            src={image}
            alt={`Image of ${title}`}
          />
        </div>
      )}
      {Array.isArray(desc)
        ? desc
        : desc.split('\n').map((d, i) => <p key={i}>{d}</p>)}

      <style jsx>{`
        .shadowed > :global(*) {
          display: block !important;
        }
      `}</style>
    </AnimatedItems>
  );
};

ShowProjectPage.getLayout = ({ children }) => <Layout>{children}</Layout>;

export default ShowProjectPage;
