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
            <h3>Liquid Longboards</h3>
          </Link>
        </li>
        <li className="nav-item ml-5">
          
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
      <Link to="/Admin" className="nav-link">
        <AdminButton>
          <span className="ml-auto">
            <i className="fa fa-archive" />
          </span>
          -Admin
        </AdminButton>
      </Link>
    </NavWrapper>
  );
}

const AdminButton = styled.button`
text-transform: capitalize;
font-size: 1rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: darkorange;
color:  darkorange;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 300ms ease-in-out;
&:hover {
  background: darkorange;
  color: var(--mainWhite);
}
&:focus {
  outline: none;
}
`;

const NavWrapper = styled.nav`
  background: url("${banner}") repeat;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`
