import { ReactNode } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'

import StyledLink from '../StyledLink'
import { boxShadow, borderRadius } from '../styles'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};

  ${borderRadius}
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}

  width: 94vw;
  @media (min-width: 900px) {
    width: 46vw;
  }
`

const CourseLink = styled(StyledLink)`
  padding: 1vmin 4vmin;
`

function Course({
  children,
  link,
  header,
  imageProps,
}: {
  children: ReactNode
  link: string
  header: string
  imageProps: ImageProps
}) {
  return (
    <Section>
      <Link href={link} passHref>
        <CourseLink>
          <h2>{header}</h2>
          <Image {...imageProps} />
          {children}
        </CourseLink>
      </Link>
    </Section>
  )
}

export default Course
