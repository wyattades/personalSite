import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import BLink from 'next/link';

const Link = ({ href, children, ...rest }) => {
  return (
    <BLink href={href} passHref>
      <a {...rest}>{children}</a>
    </BLink>
  );
};

export const NavLink = ({ href, exact, className, ...rest }) => {
  const router = useRouter();

  const active = exact
    ? router.pathname === href
    : router.pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(className, active && 'active')}
      {...rest}
    />
  );
};

export const GoBackLink = ({ href }) => {
  return (
    <Link className="goBack" href={href}>
      <span>←</span>
      <span className="sr-only">Go back</span>
    </Link>
  );
};

export default Link;
