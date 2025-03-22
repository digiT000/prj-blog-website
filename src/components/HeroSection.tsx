import React from 'react';
import ButtonLink from '@/components/ButtonLink';
import Image from 'next/image';
import { socialLink } from '@/utils/SocialLink';
import SocialLinkList from '@/components/SocialLinkList';

function HeroSection() {
  return (
    <div className={'grid grid-cols gap-6'}>
      <h1 className={'relative text-preset-2 text-with-underline w-fit'}>
        Hi, I’m Paulina 👋
      </h1>
      <p className={'text-preset-7 '}>
        I’m on a journey to become a front-end web developer. I love building
        little projects, trying out new coding techniques, and sharing what I
        learn along the way. When I’m not at my desk, you’ll find me reading,
        hiking through the mountains, or challenging myself on rock-climbing
        walls.
        <br />
        <br />I started this blog to document my progress, keep myself
        accountable, and hopefully inspire anyone else who’s learning to code.
        Welcome to my corner of the internet, and thanks for stopping by!
      </p>
      <SocialLinkList withBg={true} />
    </div>
  );
}

export default HeroSection;
