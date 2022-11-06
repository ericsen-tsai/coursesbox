import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'

import { Themes } from '@/styles/themes'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    if (window) {
      setIsDark(window.matchMedia('prefers-color-scheme: dark').matches)
    }
  }, [])

  return (
    <ThemeProvider theme={Themes[isDark ? 'dark' : 'light']}>
      <Layout isDark={isDark} onThemeToggle={() => setIsDark((prev) => !prev)}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
