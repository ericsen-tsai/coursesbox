import React, { FC, ReactElement, ReactNode } from 'react'

import { render, RenderOptions } from '@testing-library/react'

import { Themes } from './styles/themes'
import { ThemeProvider } from '@emotion/react'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={Themes.light}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'

export { customRender as render }
