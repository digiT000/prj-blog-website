import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';

interface WrapperProps {
  children: React.ReactNode;
}

function MainWrapper({ children }: WrapperProps) {
  return (
    <SectionWrapper>
      <div className={'grid grid-cols-1 gap-12 py-12 text-neutral-700'}>
        {children}
      </div>
    </SectionWrapper>
  );
}

export default MainWrapper;
