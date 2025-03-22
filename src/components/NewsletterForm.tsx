import React, { useReducer, useState } from 'react';
import Label from '@/components/Form/Label';
import InputField, { ActionPayload } from '@/components/Form/InputField';
import Button from '@/components/Form/Button';
import FieldMessage from '@/components/Form/FieldMessage';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export type Status = 'success' | 'error' | 'none';

interface InitialProps {
  email: string;
  status: Status;
  message: string;
}

const initialState: InitialProps = {
  email: '',
  status: 'none',
  message: '',
};

function reducer(state: InitialProps, action: ActionPayload) {
  switch (action.type) {
    case 'email/updateValue':
      return { status: 'none', message: '', email: action.payload };
    case 'email/onSubmit':
      // EMPTY EMAIL
      if (!state.email) {
        return {
          ...state,
          status: 'error', //This is correct
          message: 'Please enter a valid email address.',
        };
      }
      // EMAIL FORMAT
      if (!emailRegex.test(state.email)) {
        return {
          ...state,
          status: 'error', //This is correct
          message: 'Please enter a valid email address.',
        };
      }
      // SUCCESS EMAIL
      return {
        ...state,
        status: 'success',
        message: 'You’re subscribed! Check your inbox for updates.',
        email: '',
      }; // Corrected line
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

function NewsletterForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, status, message } = state;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: 'email/onSubmit',
    });
  }

  return (
    <form onSubmit={handleSubmit} className={'grid grid-cols-1 gap-4'}>
      <div>
        <Label htmlFor={'email'}>Email Address</Label>
        <InputField
          value={email}
          onChange={dispatch}
          name={'email'}
          id={'email'}
          type={'email'}
          placeholder={'email@example.com'}
        />
        {status !== 'none' && (
          <FieldMessage status={status} message={message} />
        )}
      </div>
      <Button label={'Stay Updated'} />
      <p className={'text-preset-8 text-neutral-600'}>
        Unsubscribe anytime. No spam, I promise 🙂
      </p>
    </form>
  );
}

export default NewsletterForm;
