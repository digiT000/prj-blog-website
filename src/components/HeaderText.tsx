import React from 'react';

interface HeaderTextProps {
  tag: 'h1' | 'h2';
  typeLine: 'none' | 'inline' | 'side';
  children: React.ReactNode;
}

function HeaderText({ typeLine, tag, children }: HeaderTextProps) {
  let styleLine = '';

  if (typeLine === 'side') {
    styleLine = 'text-with-sideline';
  }

  return React.createElement(
    tag,
    { className: `relative w-fit text-preset-2 ${styleLine}` },
    children
  );
}

export default HeaderText;
