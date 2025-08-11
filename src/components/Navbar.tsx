'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.95) 0%,
    rgba(10, 10, 10, 0.8) 50%,
    rgba(10, 10, 10, 0.6) 80%,
    transparent 100%
  );
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(139, 0, 0, 0.2);
  padding: 1rem 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const KanjiLogo = styled.h1`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: #FFD700;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogoText = styled.div`
  font-family: 'Cinzel', serif;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    display: none;
  }
`;

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = styled(motion.ul)<NavLinksProps>`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    padding: 2rem;
    border-bottom: 1px solid rgba(139, 0, 0, 0.3);
    gap: 1.5rem;
  }
`;

const NavLink = styled(motion.li)`
  position: relative;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #FFD700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #8B0000, #FFD700);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #FFD700;
  }

  &.active::after {
    width: 100%;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const linkVariants = {
  hover: { 
    y: -2,
    transition: { duration: 0.2 }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: scrolled 
          ? 'linear-gradient(180deg, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.85) 100%)'
          : 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.8) 50%, rgba(10, 10, 10, 0.6) 80%, transparent 100%)'
      }}
    >
      <NavContent>
        <Logo
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <KanjiLogo>極真</KanjiLogo>
          <LogoText>Kyokushin</LogoText>
        </Logo>

        <NavLinks isOpen={isOpen}>
          <NavLink variants={linkVariants} whileHover="hover">
            <StyledLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </StyledLink>
          </NavLink>
          <NavLink variants={linkVariants} whileHover="hover">
            <StyledLink href="/about" onClick={() => setIsOpen(false)}>
              About
            </StyledLink>
          </NavLink>
          <NavLink variants={linkVariants} whileHover="hover">
            <StyledLink href="/dojo-registration" onClick={() => setIsOpen(false)}>
              Dojo Registration
            </StyledLink>
          </NavLink>
          <NavLink variants={linkVariants} whileHover="hover">
            <StyledLink href="/student-registration" onClick={() => setIsOpen(false)}>
              Student Registration
            </StyledLink>
          </NavLink>
          <NavLink variants={linkVariants} whileHover="hover">
            <StyledLink href="/events" onClick={() => setIsOpen(false)}>
              Events
            </StyledLink>
          </NavLink>
          <NavLink variants={linkVariants} whileHover="hover">
            <StyledLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </StyledLink>
          </NavLink>
          <NavLink variants={linkVariants} whileHover="hover">
            <StyledLink href="/admin" onClick={() => setIsOpen(false)}>
              Admin
            </StyledLink>
          </NavLink>
        </NavLinks>

        <MobileMenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuToggle>
      </NavContent>
    </NavbarContainer>
  );
}
