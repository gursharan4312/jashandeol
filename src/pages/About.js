import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import AboutMe from "../components/AboutMe";
import Clients from "../components/Clients";
import Layout from "../components/Layout";
import List from "../components/List";

function Contact() {
  const [awards, setAwards] = useState([]);
  const [exebitions, setExebitions] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setAwards(["award1", "award2"]);
    setExebitions(["ex1", "ex2"]);
    setClients([
      {
        name: "Client1",
        logo: "/assests/images/jdeol_portrait_jashan.jpg",
      },
      {
        name: "Client2",
        logo: "/assests/images/jdeol_portrait_jashan.jpg",
      },
      {
        name: "Client3",
        logo: "/assests/images/jdeol_portrait_jashan.jpg",
      },
      {
        name: "Client4",
        logo: "/assests/images/jdeol_portrait_jashan.jpg",
      },
      {
        name: "Client5",
        logo: "/assests/images/jdeol_portrait_jashan.jpg",
      },
    ]);
  }, []);
  return (
    <Layout>
      <Container className="aboutme-container">
        <AboutMe />
        <List header="Awards" list={awards} />
        <List header="Exebitions" list={exebitions} />
        <Clients clients={clients} />
      </Container>
    </Layout>
  );
}

export default Contact;
