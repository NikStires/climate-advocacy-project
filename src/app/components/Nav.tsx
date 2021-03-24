import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>
        <Link id="logo" to="/">
          State of Global Warming
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/risk">Who Is At Risk?</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/risk' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/help">How Can You Help?</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/help' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/energy">Renewable Energy</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/energy' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  background: #3b5e4e;
  position: sticky;
  top: 0;
  z-index: 10;
  -webkit-box-shadow: 0px 8px 0px 0px rgba(49, 79, 65, 0.7);
  box-shadow: 0px 8px 0px 0px rgba(49, 79, 65, 0.7);
  a {
    color: #8ddfb9;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
      font-family: 'Work Sans', sans-serif;
    }
    ul {
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  @media (max-width: 1300px) {
    left: 0;
  }
`;

export default Nav;
