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
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

function Header({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [data, setData] = useState({});

  useEffect(() => {
    async function getProfile() {
      let data = await fetch("admin/data/profile.json");
      data = await data.json();
      setData({ ...data });
    }
    getProfile();
  }, []);

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
      <div className="nav-top fixed-top">
        <div
          className={`${
            type === "home" ? "" : "bg-dark"
          }  px-2 pt-2 d-flex flex-wrap justify-content-between align-items-center  text-white`}
        >
          <div>
            {data.phoneNumber && (
              <a href={`tel:${data.phoneNumber}`}>
                <BiPhoneCall /> : {data.phoneNumber}{" "}
              </a>
            )}
            {data.phoneNumber && data.email && " or "}
            {data.email && (
              <a href={`mailto:${data.emai}`}>
                {" "}
                <HiOutlineMail /> : {data.email}
              </a>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {data.instaUsername && (
              <a href={`https://instagram.com/${data.instaUsername}`}>
                <FaInstagram className="mx-2" />
              </a>
            )}
            {data.fb && (
              <a href={data.fb}>
                <FaFacebookF className="mx-2" />
              </a>
            )}
            {data.twitter && (
              <a href={data.twitter}>
                <FaTwitter className="mx-2" />
              </a>
            )}
          </div>
        </div>
        <Navbar
          dark
          // fixed="top"
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
      </div>
    </header>
  );
}

export default Header;
