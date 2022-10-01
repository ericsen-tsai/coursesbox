import { MouseEvent } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { boxShadow, transition } from '../styles'
import Icon, { Props as IconProps } from '../Icon'

type ButtonProps = {
  size: number
}

const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ size }) => {
    return css`
      width: ${size}rem;
      height: ${size}rem;
    `
  }};

  border-radius: 50%;

  ${transition()}

  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }
  &:hover {
    opacity: 0.9;
  }
`

export type Props = {
  /** onClick callback */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
} & IconProps

function IconButton({ onClick, ...props }: Props) {
  return (
    <Button onClick={onClick} size={(props.size || 2) * 2} title={props.name}>
      <Icon {...props}></Icon>
    </Button>
  )
}

export default IconButton
