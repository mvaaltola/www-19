import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const IndexHeader = styled.h1`
  font-family: "Raleway";
  font-weight: normal;
`

const IndexText = styled.p`
  padding-left: 50px;
`

export default () => (
  <Layout>
    <IndexHeader>index/</IndexHeader>
    <IndexText>
      A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
      <br/><br/>
      I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with
    </IndexText>
    <IndexHeader>about me</IndexHeader>
    <IndexText>
      A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
      <br/><br/>
      I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with
    </IndexText>
  </Layout>
)
