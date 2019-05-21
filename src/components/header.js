import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: block;
`

const MainTitle = styled.h1`
  font-size: 150%;
  font-family: Montserrat, sans-serif;
`

const SubTitle = styled.h3`
  font-size: 120%;
  font-family: Montserrat, sans-serif;
`

const Header = (props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const { location, title } = props
  let header
  if (location.pathname === rootPath) {
    header = (
      <StyledHeader>
        <MainTitle>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </MainTitle>
      </StyledHeader>
    )
  } else {
    header = (
      <StyledHeader>
        <SubTitle>
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </SubTitle>
      </StyledHeader>
    )
  }
  return header
}

export default Header
