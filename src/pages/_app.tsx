import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';

import '@/styles/Global.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}
