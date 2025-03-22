import React from 'react';
import { styleButton } from '@/components/Button';

interface ButtonLinkProps {
  children: React.ReactNode;
  type: 'icon' | 'primary';
  to: string;
  withBg: boolean;
}

function ButtonLink({ type, children, to, withBg }: ButtonLinkProps) {
  let btnType = '';
  if (type === 'icon') {
    btnType = `${withBg ? 'bg-neutral-100 border border-neutral-200' : ''} ${styleButton}`;
  }
  if (type === 'primary') {
    btnType =
      'bg-blue-200 border border-neutral-200 rounded-lg flex justify-center items-center w-10 h-10';
  }
  return (
    <a href={to} className={btnType}>
      {children}
    </a>
  );
}

export default ButtonLink;
