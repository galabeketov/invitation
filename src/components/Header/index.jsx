// src/components/Header.js

import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-family: "Dancing Script", cursive;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>You're Invited!</Title>
    <Subtitle>Join us for a special celebration</Subtitle>
  </HeaderContainer>
);

export default Header;
