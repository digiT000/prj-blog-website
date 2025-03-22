import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import Layout from '@/components/Layout';
import Image from 'next/image';
import SocialLinkList from '@/components/SocialLinkList';

function About() {
  return (
    <Layout>
      <div className={'grid grid-cols-1 gap-10'}>
        <div>
          <h1
            className={'relative text-preset-2 text-with-underline w-fit mb-6'}
          >
            About Me
          </h1>
          <p className={'text-preset-7 text-neutral-600 mb-6'}>
            Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for
            creativity and problem-solving. That’s what led me to the world of
            front-end web development. There’s something magical about seeing an
            idea come to life in the browser—whether it’s a simple layout
            experiment or a complex interface for a bigger project.
          </p>
          <p className={'text-preset-7 text-neutral-600 mb-6'}>
            When I’m not coding, I love getting lost in a good book. My taste is
            pretty eclectic: I’ll happily read everything from fantasy novels to
            biographies of tech pioneers. Reading helps me unwind and often
            sparks new ideas for my coding projects.
          </p>
          <p className={'text-preset-7 text-neutral-600 mb-6'}>
            Another big passion of mine is the great outdoors. Hiking allows me
            to disconnect from the digital world and reconnect with nature. I
            love challenging hikes with rewarding views at the top. And if I’m
            not on the trails, you might catch me rock climbing. The combination
            of mental focus and physical endurance is a perfect parallel to
            tackling tough coding challenges!
          </p>
          <p className={'text-preset-7 text-neutral-600 mb-6'}>
            Some of my favorite books:
          </p>
          <ul className={'pl-5 flex flex-col gap-3 mb-6'}>
            <li className={'text-preset-7 text-neutral-600  list-disc'}>
              <strong>“The Pragmatic Programmer”</strong> by Andrew Hunt and
              David Thomas (for helpful insights into software development)
            </li>
            <li className={'text-preset-7 text-neutral-600 list-disc'}>
              <strong>“Ready Player One”</strong> by Ernest Cline (for some
              futuristic escapism)
            </li>
            <li className={'text-preset-7 text-neutral-600 list-disc'}>
              <strong>“The Hobbit”</strong> by J.R.R. Tolkien (for a bit of
              fantasy fun)
            </li>
            <li className={'text-preset-7 text-neutral-600 list-disc'}>
              <strong>“Educated”</strong> by Tara Westover (for incredible
              inspiration)
            </li>
          </ul>
          <p className={'text-preset-7 text-neutral-600 mb-6'}>
            I absolutely love my workspace as a place that inspires me to do my
            best work, so I thought I’d share it with you:
          </p>
          <Image
            src={'/image-workspace-large.jpg'}
            alt={'my workspace image'}
            width={1000}
            height={700}
            className={'relative w-full mb-6'}
          />
          <p className={'text-preset-7 text-neutral-600'}>
            I hope this blog not only documents my growth but also helps others
            see that coding can be for everyone. Thanks for joining me on this
            journey!
          </p>
        </div>

        <div>
          <h2 className={'text-preset-2 text-neutral-700 mb-4'}>Follow Me</h2>
          <SocialLinkList withBg={true} />
        </div>
      </div>
    </Layout>
  );
}

export default About;
