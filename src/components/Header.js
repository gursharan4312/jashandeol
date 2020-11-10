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
  Button,
} from "reactstrap";

function Header() {
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
  });

  return (
    <header>
      <Navbar
        dark
        fixed="top"
        expand="md"
        className={` ${scrolled ? "bg-dark" : ""}`}
      >
        <NavbarBrand href="/">JashanDeol</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="mx-2">
              <DropdownToggle nav caret>
                Portfolio
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Potrait</DropdownItem>
                <DropdownItem>Wedding</DropdownItem>
                <DropdownItem>Landscape</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button color="primary" className="mx-2">
              Contact me
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
