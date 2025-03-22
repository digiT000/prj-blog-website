import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

function SectionWrapper({ children }: SectionProps) {
  return (
    <section className={'px-4 sm:px-5'}>
      <div className={'max-w-[720px] mx-auto min-h-screen px-2'}>
        <div
          className={`min-h-screen border-l border-r border-neutral-200 px-4`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper;
