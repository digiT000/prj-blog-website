import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NavigationBar.module.css';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';
import { ThemeSwitcherContext } from '@/context/ThemeContext';

const link = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Newsletter',
    href: '/newsletter',
  },
];

function NavigationBar() {
  const pathname = usePathname();
  const { isDarkMode, toggle } = ThemeSwitcherContext();
  return (
    <header
      className={`${isDarkMode ? 'dark' : 'light'} mt-4 px-4 sm:mt-5 sm:px-5`}
    >
      <div
        className={
          'max-w-[720px]  mx-auto p-2 bg-neutral-0 border border-neutral-200 flex justify-between items-center gap-5 rounded-lg dark:bg-neutral-800 dark:border-neutral-700'
        }
      >
        <Image
          className={'w-10 h-10 rounded-lg'}
          src={'/image-avatar.jpg'}
          alt={'Avatar'}
          width={100}
          height={100}
        />
        <div className={'flex gap-6'}>
          <nav className={'hidden sm:flex sm:items-center sm:gap-6'}>
            {link.map((link) => (
              <Link
                className={`z-20 inline-block text-preset-8 text-neutral-600 dark:text-neutral-100 ${pathname === link.href ? styles.activeLink : ''} `}
                key={link.label}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className={'w-10 h-10 flex justify-center items-center sm:hidden'}
          >
            <Image
              className={'w-5 h-5'}
              src={'/icon-menu.svg'}
              alt={'menu'}
              width={100}
              height={100}
            />
          </button>
          <Button onClick={toggle} type={'icon'}>
            <Image
              className={'w-5 h-5'}
              src={`/icon-${!isDarkMode ? 'dark' : 'light'}.svg`}
              alt={'toggle dark light mode'}
              width={32}
              height={32}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;
