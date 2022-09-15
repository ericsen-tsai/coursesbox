import { MouseEvent } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { AppTheme } from '@/styles/themes'
import { boxShadow, transition, borderRadius } from '@/components/styles'

export type Color = 'primary' | 'secondary' | 'danger' | 'warning'

export type Props = {
  children: string
  color?: Color
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const getColors = (color: Color, theme: AppTheme): SerializedStyles => {
  switch (color) {
    case 'primary':
      return css`
        background-color: #6d5dfc;
        color: #e4ebf5e6;
      `
    case 'secondary':
      return css`
        color: ${theme.font.regular};
      `
    case 'danger':
      return css`
        background-color: ${theme.components[color]};
        color: ${theme.font.button};
      `
    case 'warning':
      return css`
        background-color: ${theme.components[color]};
        color: ${theme.font.warning};
      `
  }
}

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  ${borderRadius}
  ${transition()}
  ${({ color = 'primary', theme }) => getColors(color, theme)}
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
  &:hover {
    opacity: 0.9;
  }
  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }
`

Button.defaultProps = { color: 'primary' }
