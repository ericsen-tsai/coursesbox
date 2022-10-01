import styled from '@emotion/styled'

import { Icons } from './Icons'

export type AvailableIcons = keyof typeof Icons

type WrapperProps = {
  /** Width and height */
  size?: number
}

export type Props = {
  /** Icon name */
  name: AvailableIcons
} & WrapperProps &
  React.SVGProps<SVGSVGElement>

const Wrapper = styled.div<WrapperProps>`
  color: ${({ theme }) => theme.font.regular};
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
`

function Icon({ name, size = 2, ...rest }: Props) {
  const RenderIcon = Icons[name]
  const sizes = { width: `${size}rem`, height: `${size}rem` }

  return (
    <Wrapper size={size}>
      <RenderIcon {...sizes} {...rest} />
    </Wrapper>
  )
}

export default Icon
