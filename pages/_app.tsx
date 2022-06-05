import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp
