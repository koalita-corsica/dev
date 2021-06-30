import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import * as styles from "./header.module.css";

import styled from "styled-components";

const MenuIcon = styled.div`
  display: ${({ show }) => (show === false ? "none" : "none")};
  @media (max-width: 1024px) {
    position: ${({ nav }) => (nav ? "fixed" : "fixed")};
    left: ${({ nav }) => (nav ? "" : "6vw")};
    // right: ${({ nav }) => (nav ? "6vw" : "")};
    top: ${({ nav }) => (nav ? "10vh" : "")};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    cursor: pointer;
    z-index: 100;
    div {
      width: 2.5rem;
      height: 0.3rem;
      background: ${({ nav }) => (nav ? "#707070" : "#707070")};
      transform-origin: 1px;
      transition: transform 300ms;
      z-index: 900;

      :first-child {
        transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ nav }) => (nav ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
const MenuLinks = styled.nav`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  div {
    display: none;
  }
  @media (max-width: 1024px) {
    align-item: ${({ nav }) => (nav ? "center" : "none")};
    text-transform: uppercase;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ nav }) => (nav ? "block" : "none")};
    background-color: #E3E3DC;
    z-index: 90;
    ul {
      list-style-type: none;
      flex-direction: column;
    }
    li {
      margin-top: 6vh;
      justify-self: center;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: ${({ nav }) => (nav ? "" : "")}
      transition: color 300ms;
      :hover {
        color: #f26633;
      }
    }
    div {
      display: block;
    }
    div:last-child {
      display: flex;
      margin-top: 6vh;
      justify-content: center;
      gap: 3vw;
      svg {
        width: 40px;
        height: auto;
        path{
          color: #685950;
        }
      }
    }
  }
`;

const Header = ({ nav, showNav, show }) => (
  <div className={styles.wrapper}>
    <div className={styles.siteTitle}>
      <Link to="/">domaine mondange</Link>
    </div>

    <MenuIcon
      nav={nav}
      onClick={() => showNav(!nav)}
      styles={{ display: "none" }}
    >
      <div />
      <div />
      <div />
    </MenuIcon>

    <MenuLinks nav={nav}>
      <nav className={cn(styles.nav, showNav && styles.showNav)} data-nav="nav">
        <div className={styles.siteTitle}>
          <Link to="/">domaine mondange</Link>
        </div>
        <ul>
          <li>
            <Link to="/">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/vins">NOS VINS</Link>
          </li>
          <li>
            <Link to="/domaine">LE DOMAINE</Link>
          </li>
          <li>
            <Link to="/galerie">LA GALERIE</Link>
          </li>
          <li>
            <Link to="/presse">LA PRESSE</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className={styles.sociaux}>
          <FaInstagram />
          <FaFacebookF />
        </div>
      </nav>
    </MenuLinks>
  </div>
);

export default Header;
