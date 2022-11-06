import { ReactNode } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import StyledLink from '../StyledLink'
import Logo from '../Logo'
import Input from '../Input'
import IconButton from '../IconButton'

const Wrapper = styled.div`
  display: grid;
  gap: 0.1rem;
  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  padding: 0.5rem;

  grid-template-areas:
    'header nav'
    'search search'
    'content content'
    'footer footer';

  nav {
    flex-direction: row;
    justify-content: flex-end;
    gap: 5vmin;
  }
  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'header nav'
      'search search'
      'content content'
      'footer footer';

    nav {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-areas:
      'header search nav'
      'content content content'
      'footer footer footer';

    nav {
      flex-direction: row;
    }
  }
`

const StyledLogo = styled(Logo)`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4rem;
  & .logo_full {
    display: none;
    font-family: 'Monoton', cursive;
  }

  @media (min-width: 560px) {
    & .logo_short {
      display: none;
    }

    & .logo_full {
      display: inline;
    }
  }
`

const MainNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2vmin;
  a {
    cursor: pointer;
    color: ${({ theme }) => theme.font.regular};
    &:hover {
      opacity: 0.7;
    }
  }
`

const LogoLink = styled(StyledLink)`
  padding-right: 1vw;
`

const SearchInput = styled(Input)`
  grid-area: search;
  width: 100%;
  height: 4rem;
`

const Content = styled.main`
  grid-area: content;
`

const Footer = styled.footer`
  grid-area: footer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 5rem;
`

function Layout({
  children,
  isDark,
  onThemeToggle,
}: {
  children: ReactNode
  isDark: boolean
  onThemeToggle: () => void
}) {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <LogoLink>
          <StyledLogo size={3}>
            <span className="logo_short">C8X</span>
            <span className="logo_full">CoursesBox</span>
          </StyledLogo>
        </LogoLink>
      </Link>
      <MainNav>
        <Link href="/all">All</Link>
        <Link href="/news">News</Link>
        <IconButton
          name={isDark ? 'Sun' : 'Moon'}
          size={1}
          onClick={onThemeToggle}
        />
      </MainNav>
      <SearchInput icon="Search" placeholder="Search" onChange={() => {}} />
      <Content>{children}</Content>
      <Footer>
        © {new Date().getFullYear()} Ericsen Tsai. All rights reserved.
      </Footer>
    </Wrapper>
  )
}

export default Layout
