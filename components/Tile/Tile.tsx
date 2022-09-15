import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

import { boxShadow, borderRadius } from '@/components/styles'

type Props = {
  header: string
  children: ReactNode
}

const Section = styled.section`
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
  ${borderRadius}
  color: ${({ theme }) => theme.font.regular};
  padding: 1vmin 4vmin 4vmin;
`

function Tile({ header, children }: Props) {
  return (
    <Section>
      <h2>{header}</h2>
      {children}
    </Section>
  )
}

export default Tile
