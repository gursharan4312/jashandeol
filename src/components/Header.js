import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function Header({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header>
      <Navbar
        dark
        fixed="top"
        expand="md"
        className={type === "home" ? (!scrolled ? "" : "bg-dark") : "bg-dark"}
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
          {/* <br /> */}
          <span style={{ fontSize: "0.8rem", display: "block" }}>
            PHOTOGRAPHER
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="text-uppercase">
          <Nav className="ml-auto" navbar>
            {/* <UncontrolledDropdown nav inNavbar className="mx-2">
              <DropdownToggle nav caret>
                Portfolio
              </DropdownToggle>
              <DropdownMenu>
                <Link to="/portfolio/people" className="text-decoration-none">
                  <DropdownItem>People</DropdownItem>
                </Link>
                <Link to="/portfolio/products" className="text-decoration-none">
                  <DropdownItem>Products</DropdownItem>
                </Link>
                <Link
                  to="/portfolio/landscape"
                  className="text-decoration-none"
                >
                  <DropdownItem>Landscape</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem className="mx-2">
              <NavLink href="/portfolio">portfolio</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            {/* <a href="/#contact" className=" btn btn-primary mx-2">
              Contact me
            </a> */}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
