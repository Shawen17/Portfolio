import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background: orangered;
  height: 85px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    color: teal;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: black;
  }

  @media screen and (max-width: 768px) {
    color: white;
    margin-bottom: 10px;
    &:hover {
      background-color: cyan;
      border-radius: 6px;
      color: orangered;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuCollapse = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  padding: 10px 0px 20px 20px;
  width: 100%;
  justify-content: center;
  background: orangered;
  position: fixed;
  top: 1px;
  left: 0;
  right: 0;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }

  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: black;
  }

  @media screen and (max-width: 768px) {
    color: white;
    margin-bottom: 10px;
    &:hover {
      background-color: cyan;
      border-radius: 6px;
      color: orangered;
    }
  }
`;

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Nav>
        <NavLogo to="/">
          <i className="pi pi-building" style={{ fontSize: "2.0rem" }}></i>
        </NavLogo>
        <Bars onClick={() => setClicked(!clicked)} />

        <NavMenu>
          <NavLink to="/about">About</NavLink>

          <ExternalLink
            href="https://www.github.com/shawen17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-github" style={{ fontSize: "1.5rem" }}></i>
          </ExternalLink>
          <ExternalLink
            href="https://linkedin.com/in/oluwaseun-johnson-850a433b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-linkedin" style={{ fontSize: "2.0rem" }}></i>
          </ExternalLink>
          <NavBtn>
            <NavBtnLink
              href="/oluwaseun_fullstack_developer.pdf"
              download="resume.pdf"
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <NavMenuCollapse style={{ display: clicked ? "block" : "none" }}>
          <NavLink to="/about">About</NavLink>

          <ExternalLink
            href="https://www.github.com/shawen17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-github" style={{ fontSize: "1.5rem" }}></i>
          </ExternalLink>
          <ExternalLink
            href="https://linkedin.com/in/oluwaseun-johnson-850a433b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="pi pi-linkedin" style={{ fontSize: "1.5rem" }}></i>
          </ExternalLink>
          <NavBtn>
            <NavBtnLink
              href="/oluwaseun_fullstack_developer.pdf"
              download="resume.pdf"
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavMenuCollapse>
      </motion.div>
    </>
  );
};
export default Navbar;
