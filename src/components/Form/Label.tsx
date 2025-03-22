import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={'block text-preset-7 text-neutral-700 mb-2'}
    >
      {children}
    </label>
  );
}

export default Label;
