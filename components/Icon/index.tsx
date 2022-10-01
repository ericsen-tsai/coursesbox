import styled from '@emotion/styled'

import { Icons } from './Icons'

export type AvailableIcons = keyof typeof Icons

export type Props = {
  /** Icon name */
  name: AvailableIcons
  /** Icon size */
  size?: number
} & React.SVGProps<SVGSVGElement>

function Icon({ name, size = 2, ...rest }: Props) {
  const RenderIcon = styled(Icons[name])`
    color: ${({ theme }) => theme.font.regular};
  `
  const sizes = { width: `${size}rem`, height: `${size}rem` }

  return <RenderIcon role="img" aria-label={name} {...sizes} {...rest} />
}

export default Icon
