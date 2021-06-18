import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Nav from 'components/Nav';

const Layout = ({
  children,
  className,
  innerClassName,
  pageClassName,

  noSpacing = false,
}) => {
  const router = useRouter();

  return (
    <div className={clsx('wrapper', className)}>
      <TransitionGroup component="main" className="main">
        <CSSTransition
          key={router.asPath}
          classNames="pagefade"
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <div className={clsx('main-inner', innerClassName)}>
            <div className={clsx(pageClassName, !noSpacing && 'page')}>
              {children}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Nav />
    </div>
  );
};

export default Layout;
