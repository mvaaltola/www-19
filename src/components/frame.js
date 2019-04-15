import React from "react"
import styled from "styled-components"

const FrameBox = styled.div`
  width: 80%;
  max-width: 832px;
  border-radius: 15px;
  margin: 0px auto;
  border: 2px solid black;
`

const ContentBox = styled.div`
  width: 80%;
  max-width: 650px;
  min-height: 70vh;
  margin: 3em auto;
`

const BottomPoint = styled.div`
  background-color: black;
  height: 8px;
  width: 8px;
  margin: 0 auto;
  border-radius: 50px;
  position: relative;
  top: -1.5em;
`

export default ({ children }) => (
  <FrameBox>
    <ContentBox>
      {children}
    </ContentBox>
    <BottomPoint />
  </FrameBox>
)