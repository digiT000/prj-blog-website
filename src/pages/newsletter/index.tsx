import React from 'react';
import NewsletterForm from '@/components/NewsletterForm';
import Layout from '@/components/Layout';

function Newsletter() {
  return (
    <Layout>
      <div className={'grid grid-cols-1 gap-4'}>
        <h1 className={'text-preset-2 text-neutral-700'}>Newsletter</h1>
        <p className={'text-preset-7 text-neutral-600'}>
          Want to stay updated on my latest articles, coding tutorials, and
          personal adventures? Sign up for my newsletter! It’s a simple way to
          keep track of new posts and occasional coding tips I discover. Just
          drop your email in the sign-up box, and I’ll send you updates whenever
          there’s something new to share.
        </p>
        <h2 className={'text-preset-5 text-neutral-700'}>
          I’d love to have you along for the ride and also hear about your own
          journey!
        </h2>
      </div>
      <NewsletterForm />
    </Layout>
  );
}

export default Newsletter;
