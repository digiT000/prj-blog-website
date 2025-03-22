import React from 'react';
import { Status } from '@/components/NewsletterForm';
import Image from 'next/image';

interface FieldMessageProps {
  status: Status;
  message: string;
}

function FieldMessage({ message, status }: FieldMessageProps) {
  return (
    <div className={'flex gap-2 items-center mt-2'}>
      <Image
        src={`/icon-${status}.svg`}
        alt={`icon-${status}`}
        width={100}
        height={100}
        className={'w-5 h-5'}
      />
      <p
        className={`text-preset-8  ${status === 'error' ? 'text-red-600' : 'text-green-700'}`}
      >
        {message}
      </p>
    </div>
  );
}

export default FieldMessage;
