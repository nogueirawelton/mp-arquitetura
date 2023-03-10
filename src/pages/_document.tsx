import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <body
        style={{
          background: '#222',
        }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
