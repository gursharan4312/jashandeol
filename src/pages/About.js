import React, { useState } from "react";
import { Container } from "reactstrap";
import AboutMe from "../components/AboutMe";
import Clients from "../components/Clients";
import Layout from "../components/Layout";
import List from "../components/List";

function Contact() {
  const [awards, setAwards] = useState(["award1", "award2"]);
  const [exebitions, setExebitions] = useState(["ex1", "ex2"]);
  const [clients, setClients] = useState([
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
