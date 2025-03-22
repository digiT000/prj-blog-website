import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const initialTheme = 'light'; // Or 'dark'
  return (
    <Html lang="en" className={initialTheme}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
