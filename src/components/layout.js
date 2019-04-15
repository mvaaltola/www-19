import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  padding: 0 1rem;
`

export default ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)