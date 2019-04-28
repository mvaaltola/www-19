import React from "react"
import styled from "styled-components"
import Header from "./header"
import Frame from "./frame"
import bgimg from "../assets/images/mv-bg-1.svg"
import "typeface-nobile"
import "typeface-oxygen"
import "typeface-raleway"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgimg});
  background-size: 1145 732;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left top;
`

export default ({ children }) => (
  <Wrapper>
    <Header />
    <Frame>
      {children}
    </Frame>
  </Wrapper>
)