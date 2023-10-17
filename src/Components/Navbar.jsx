import React, { useState } from 'react';
import "./Navbar.css"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';


export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' sticky light bgColor='light' className='nav'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Service Exchange</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='#'>About</MDBNavbarLink>
            <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
            <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}