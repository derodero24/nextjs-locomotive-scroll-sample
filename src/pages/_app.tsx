import '../styles/global.css';

import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { route } = useRouter();

  return (
    <ThemeProvider attribute="class">
      <LocomotiveScrollProvider options={{ smooth: true }} watch={[route]}>
        <div data-scroll-container className="container" ref={containerRef}>
          <Component {...pageProps} />
        </div>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  );
}
