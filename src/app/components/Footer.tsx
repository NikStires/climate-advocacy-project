import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
      <h3>
        Designed and Built by <a href="https://nikstires.com/">Nik Stires</a>
      </h3>
      <h3>
        Made with <span>☕️</span>
      </h3>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  position: relative;
  bottom: 0;
  background: #3b5e4e;
  min-height: 10vh;
  text-align: center;
  a {
    text-decoration: none;
    color: #8ddfb9;
  }
  a:visited {
    text-decoration: none;
  }
  h3 {
    margin: 0;
    color: white;
  }
`;

export default Footer;
