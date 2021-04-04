import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Header({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const [scrolled, setScrolled] = React.useState(false);
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <header>
      <div
        className={`${
          type === "home" ? "" : "bg-dark"
        } nav-top d-flex justify-content-between align-items-center fixed-top text-white`}
      >
        <div>604464646464 or exampe@famf.comd</div>
        <div className="d-flex justify-content-around align-items-center">
          <FaInstagram className="mx-2" />
          <FaFacebookF className="mx-2" />
          <FaTwitter className="mx-2" />
        </div>
      </div>
      <Navbar
        dark
        fixed="top"
        expand="md"
        className={type === "home" ? "" : "bg-dark"}
      >
        <NavbarBrand
          href="/"
          style={{
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontsize: "2rem",
          }}
        >
          JashanDeol
          <span style={{ fontSize: "0.8rem", display: "block" }}>
            PHOTOGRAPHER
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-uppercase">
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink href="/portfolio">portfolio</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/projects">projects</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/about">about</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/testimonials">testimonials</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
