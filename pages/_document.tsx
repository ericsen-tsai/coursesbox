import { Html, Head, Main, NextScript } from 'next/document'
import { Global } from '@emotion/react'

import { GlobalStyles } from '@/styles/global'
function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <Global styles={GlobalStyles} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
