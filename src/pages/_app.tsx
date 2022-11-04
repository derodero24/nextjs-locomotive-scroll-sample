import '../styles/global.css';

import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { asPath } = useRouter();

  return (
    <ThemeProvider attribute="class">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          multiplier: 0.5, // speed control
        }}
        watch={[asPath]}
        containerRef={containerRef}
      >
        {/* fixed elements must be placed outside the data-scroll-container */}
        {/* <div className='fixed ...'/> */}

        <div
          data-scroll-container
          ref={containerRef}
          className="container"
          // important!!
          // Fix "Elements disappearing when scroll back to the top #361" bug
          style={{ perspective: '1px' }}
        >
          <Component {...pageProps} />
        </div>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  );
}
