import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Header = styled.div`
  font-family: "Oxygen";
  max-width: 792px;
  margin: 1.5em auto;
  padding: 0 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

`
const Logo = styled(Link)`
  font-size: 36px;
  color: inherit;
  text-decoration: none;
  text-align: left;
  flex-grow: 1
`

const NavList = styled.div`
  list-style-type: none;
  flex-grow: 6;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
`
const NavItem = styled(Link)`
  font-family: "Oxygen";
  color: inherit;
  text-decoration: none;
  width: 100px;
  text-align: center;
  font-size: 24px;
`

export default () => (
  <Header>
    <Helmet>
      <meta charSet="utf-8" />
      <title>vaalto.la</title>
    </Helmet>
    <Logo to="/">vaalto.la_</Logo>
    <NavList>
      <NavItem to="/work/" activeStyle={{ textDecoration: "underline" }}>work</NavItem>
      <NavItem to="/blog/" activeStyle={{ textDecoration: "underline" }}>blog</NavItem>
      <NavItem to="/contact/" activeStyle={{ textDecoration: "underline" }}>contact</NavItem>
    </NavList>
  </Header>
)