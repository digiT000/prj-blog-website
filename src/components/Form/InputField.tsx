import React from 'react';
import { HTMLInputTypeAttribute } from 'react';

export interface ActionPayload {
  type: string;
  payload?: string;
}

interface InputProps {
  type: HTMLInputTypeAttribute | undefined;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (payload: ActionPayload) => void;
}

function InputField({
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
}: InputProps) {
  return (
    <input
      id={id}
      className={
        'cursor-pointer px-4 py-3 text-preset-7 text-neutral-600 bg-neutral-0 border border-neutral-300 rounded-xl w-full hover:bg-neutral-200 focus:outline-offset-2 focus:outline-blue-500 transition '
      }
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange({
          type: 'email/updateValue',
          payload: event.target.value,
        });
      }}
    />
  );
}

export default InputField;
