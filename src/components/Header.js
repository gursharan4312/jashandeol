import React, { useState } from "react";
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
  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">JashanDeol</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Portfolio
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Potrait</DropdownItem>
                <DropdownItem>Wedding</DropdownItem>
                <DropdownItem>Landscape</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button color="primary">Contact me</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
