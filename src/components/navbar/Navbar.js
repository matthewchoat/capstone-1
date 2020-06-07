import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../../tranquil.jpg';
import lblogo from '../../longboardanimation.gif';
import { Button } from '../common/Button';

export default function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {}
      <Link to="/">
        <img src={lblogo} width= "75px" margin="0px" alt="Liquid Longboards" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            <h3>LIQUID LONGBOARDS</h3>
          </Link>
        </li>
      </ul>
      <Link to="/pack" className="ml-auto">
        <Button>
          <span className="mr-2">
            <i className="fa fa-suitcase" />
          </span>
          My Pack
        </Button>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  background: url("${banner}") repeat;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
