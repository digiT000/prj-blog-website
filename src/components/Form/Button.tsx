import React from 'react';

interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return (
    <button
      type={'submit'}
      className={
        'w-fit cursor-pointer  px-6 py-3 rounded-xl bg-blue-500 text-neutral-700 hover:bg-blue-700 transition text-lg font-bold'
      }
    >
      {label}
    </button>
  );
}

export default Button;
