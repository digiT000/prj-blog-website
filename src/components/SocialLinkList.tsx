import React from 'react';
import { socialLink } from '@/utils/SocialLink';
import ButtonLink from '@/components/ButtonLink';
import Image from 'next/image';

interface SocialLinkList {
  withBg: boolean;
}

function SocialLinkList({ withBg }: SocialLinkList) {
  return (
    <div className={'flex gap-3'}>
      {socialLink.map((socialMedia) => (
        <ButtonLink
          key={socialMedia.src}
          withBg={withBg}
          to={socialMedia.href}
          type={'icon'}
        >
          <Image
            className={'w-5 h-5 '}
            src={socialMedia.src}
            alt={socialMedia.alt}
            width={100}
            height={100}
          />
        </ButtonLink>
      ))}
    </div>
  );
}

export default SocialLinkList;
