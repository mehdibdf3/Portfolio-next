"use client";

import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { CgGitFork, CgFileDocument } from 'react-icons/cg';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineComment,
} from 'react-icons/ai';
import { UserContext } from '../UserContext';

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const { user, logout } = useContext(UserContext);
  const router = useRouter();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="/" onClick={() => setExpand(false)} style={{ fontSize: '14px' }}>
                <AiOutlineHome style={{ marginRight: '5px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/about" onClick={() => setExpand(false)} style={{ fontSize: '14px' }}>
                <AiOutlineUser style={{ marginRight: '5px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/projects" onClick={() => setExpand(false)} style={{ fontSize: '14px' }}>
                <AiOutlineFundProjectionScreen style={{ marginRight: '5px' }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/resume" onClick={() => setExpand(false)} style={{ fontSize: '14px' }}>
                <CgFileDocument style={{ marginRight: '5px' }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/contact" onClick={() => setExpand(false)} style={{ fontSize: '14px' }}>
                <AiOutlineMail style={{ marginRight: '5px' }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/testimonials" onClick={() => setExpand(false)} style={{ fontSize: '14px' }}>
                <AiOutlineComment style={{ marginRight: '5px' }} /> Testimonials
              </Nav.Link>
            </Nav.Item>

            {user && (
              <Nav.Item>
                <Nav.Link onClick={handleLogout} style={{ fontSize: '14px' }}>
                  Logout
                </Nav.Link>
              </Nav.Item>
            )}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/mehdibdf3/portfolio-react.git"
                target="_blank"
                className="fork-btn-inner"
                style={{ fontSize: '14px' }}
              >
                <CgGitFork style={{ fontSize: '1.2em', marginRight: '5px' }} /> <AiFillStar style={{ fontSize: '1.1em' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
