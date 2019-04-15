import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.div`
  font-family: "Oxygen";
  max-width: 792px;
  margin: 3rem auto;
  padding: 0 1rem;
  border: 2px solid red;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

`
const Logo = styled(Link)`
  font-size: 36px;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  text-align: left;
  flex-grow: 1
`

const NavList = styled.div`
  border: 3px solid green;
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
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  width: 80px;
  text-align: center;
  font-size: 24px;
`

export default () => (
  <Header>
    <Logo to="/">vaalto.la_</Logo>
    <NavList>
      <NavItem to="/work/" activeStyle={{ textDecoration: "underline" }}>work</NavItem>
      <NavItem to="/blog/" activeStyle={{ textDecoration: "underline" }}>blog</NavItem>
      <NavItem to="/contact/" activeStyle={{ textDecoration: "underline" }}>contact</NavItem>
    </NavList>
  </Header>
)