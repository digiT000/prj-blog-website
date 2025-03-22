import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import React from 'react';
import MainWrapper from '@/components/MainWrapper';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}
