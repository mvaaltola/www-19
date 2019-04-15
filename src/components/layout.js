import React from "react"
import styled from "styled-components"
import Header from "./header"
import Frame from "./frame"

const Wrapper = styled.div`
  width: 100vw;
  height: 100wh;
`

export default ({ children }) => (
  <Wrapper>
    <Header />
    <Frame>
      {children}
    </Frame>
  </Wrapper>
)