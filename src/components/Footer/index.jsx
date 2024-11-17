// src/components/Footer.js

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 30px 20px;
  background: #ff9a9e;
  color: #fff;
`;

const FooterText = styled.p`
  font-size: 1.2rem;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>Please RSVP by [Date] to [Contact Information]</FooterText>
  </FooterContainer>
);

export default Footer;
