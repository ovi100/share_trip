import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './menu.css';
import logo from '../images/logo.svg';
import spin_wheel from '../images/spin-wheel.svg';

const menu_list = [
  {
    name: 'flight',
    url: '/flight',
    children: []
  },
  {
    name: 'bus',
    url: '/bus',
    children: []
  },
  {
    name: 'hotel',
    url: '/hotel',
    children: []
  },
  {
    name: 'holiday',
    url: '/holiday',
    children: []
  },
  {
    name: 'visa',
    url: '/visa',
    children: []
  },
  {
    name: 'visa guid',
    url: '/visa-guid',
    children: []
  },
  {
    name: 'group request',
    url: '/group-request',
    children: []
  },
  {
    name: 'travel advisory',
    url: '/travel-advisory',
    children: []
  },
  {
    name: 'promotions',
    url: '/promotions',
    children: []
  },
  {
    name: 'blog',
    url: '/blog',
    children: []
  }
];

const Menubar = () => {

  const [activeLink, setActiveLink] = useState("bus");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("home");
    }
    else if (location.pathname === "/bus") {
      setActiveLink("bus");
    }
  }, [location]);

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link to="/" className="navbar-brand"><img src={logo} className="d-block w-100" alt="Logo" /></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {
                menu_list.map(item => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={`${activeLink === item.name ? "nav-link active" : "nav-link"}`}
                    onClick={() => setActiveLink(item.url)}
                  >
                    {item.name}
                  </Link>
                )
                )
              }
            </Nav>
            <Nav className="d-flex align-items-center justify-content-between">
              <div className="spin-wheel d-flex">
                <img src={spin_wheel} className="d-block" alt="Spin" /> spin to wheel
              </div>
              <div className="button-switch">
                <input type="checkbox" id="switch-orange" className="switch" />
                <label for="switch-orange" className="lbl-off">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect width="20" height="4" rx="2" fill="white" />
                    <rect opacity="0.7" x="8" y="8" width="12" height="4" rx="2" fill="white" />
                    <rect opacity="0.8" x="4" y="16" width="16" height="4" rx="2" fill="white" />
                  </svg>
                </label>
                <label for="switch-orange" className="lbl-on">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect width="20" height="4" rx="2" fill="white" />
                    <rect opacity="0.7" x="8" y="8" width="12" height="4" rx="2" fill="white" />
                    <rect opacity="0.8" x="4" y="16" width="16" height="4" rx="2" fill="white" />
                  </svg>
                </label>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menubar
