import React from "react"
import styled from "styled-components"

const FrameBox = styled.div`
  max-width: 832px;
  border-radius: 15px;
  margin: 0px auto;
  border: 2px solid black;
`

const ContentBox = styled.div`
  max-width: 650px;
  min-height: 70vh;
  margin: 3em auto;
  border: 1px solid red;

`

export default ({ children }) => (
  <FrameBox>
    <ContentBox>
      {children}
    </ContentBox>
  </FrameBox>
)