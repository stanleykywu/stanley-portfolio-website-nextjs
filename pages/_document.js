import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <link rel="shortcut icon" href=".//favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href=".//apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href=".//favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href=".//favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href=".//android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href=".//android-chrome-512x512.png" />
        <link rel="manifest" href=".//site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}