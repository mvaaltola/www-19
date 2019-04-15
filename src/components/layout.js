import React from "react"
import styled from "styled-components"
import Header from "./header"
import Frame from "./frame"
import "typeface-nobile"
import "typeface-oxygen"
import "typeface-raleway"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export default ({ children }) => (
  <Wrapper>
    <Header />
    <Frame>
      {children}
    </Frame>
  </Wrapper>
)