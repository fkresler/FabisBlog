import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import { rhythm, scale } from '../utils/typography'

const StyledLayoutWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  padding: 1.5rem 0.75rem;
  margin-left: auto;
  margin-right: auto;
`

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    return (
      <StyledLayoutWrapper>
        <Header
          location={location}
          title={title} />
        <main>{children}</main>
        <Footer />
      </StyledLayoutWrapper>
    )
  }
}

export default Layout
