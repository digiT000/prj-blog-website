import React from 'react';

export const styleButton =
  ' rounded-lg flex justify-center items-center w-10 h-10 hover:bg-neutral-200 transition-colors duration-300 dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-700';

interface ButtonProps {
  children: React.ReactNode;
  type: 'icon' | 'primary';
  onClick: () => void;
  withBg?: boolean;
}

function Button({ children, type, onClick, withBg }: ButtonProps) {
  let btnType = '';
  if (type === 'icon') {
    btnType = `${withBg ? 'bg-neutral-100 border border-neutral-200' : ''} ${styleButton}`;
  }
  if (type === 'primary') {
    btnType =
      'bg-blue-200 border border-neutral-200 rounded-lg flex justify-center items-center w-10 h-10';
  }
  return (
    <button onClick={onClick} className={btnType}>
      {children}
    </button>
  );
}

export default Button;
