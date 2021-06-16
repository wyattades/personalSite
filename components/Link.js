import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import BLink from 'next/link';
import { createGlobalState } from 'react-use/lib/factory/createGlobalState';

export const useHoveredLink = createGlobalState();

const Link = ({ href, children, ...rest }) => {
  return (
    <BLink href={href} passHref>
      <a {...rest}>{children}</a>
    </BLink>
  );
};

const textContent = (r) =>
  !r
    ? ''
    : Array.isArray(r)
    ? r.map(textContent).join('')
    : typeof r === 'string'
    ? r
    : textContent(r.props.children);

export const NavLink = ({ href, exact, className, ...rest }) => {
  const router = useRouter();

  const active = exact
    ? router.pathname === href
    : router.pathname.startsWith(href);

  const [, setHoveredLink] = useHoveredLink();

  const linkText = textContent(rest.children);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHoveredLink(linkText)}
      onMouseLeave={() => setHoveredLink(null)}
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
