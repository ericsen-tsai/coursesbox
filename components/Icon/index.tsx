import styled from '@emotion/styled'

import { Icons } from './Icons'

export type AvailableIcons = keyof typeof Icons

type WrapperProps = {
  /** Width and height */
  size?: string
}

export type Props = {
  /** Icon name */
  name: AvailableIcons
} & WrapperProps &
  React.SVGProps<SVGSVGElement>

const Wrapper = styled.div<WrapperProps>`
  color: ${({ theme }) => theme.font.regular};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

function Icon({ name, size = '2rem', ...rest }: Props) {
  const RenderIcon = Icons[name]
  const sizes = { width: size, height: size }

  return (
    <Wrapper size={size}>
      <RenderIcon {...sizes} {...rest} />
    </Wrapper>
  )
}

export default Icon
