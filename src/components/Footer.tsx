import React from 'react';
import Separator from '@/components/Separator';
import { socialLink } from '@/utils/SocialLink';
import ButtonLink from '@/components/ButtonLink';
import Image from 'next/image';
import SocialLinkList from '@/components/SocialLinkList';

function Footer() {
  return (
    <footer className={'px-4 sm:px-5'}>
      <div className={'max-w-[720px] mx-auto px-2'}>
        <div className={`border-l border-r border-neutral-200 px-4`}>
          <Separator />
          <div className={'flex justify-between items-center mt-5'}>
            <p className={'text-preset-8'}>Made with ❤️ and ☕️</p>
            <SocialLinkList withBg={false} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
