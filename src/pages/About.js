import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import AboutMe from "../components/AboutMe";
import Clients from "../components/Clients";
import Layout from "../components/Layout";
import List from "../components/List";
import Loader from "../components/Loader";

function Contact() {
  const [about, setAbout] = useState("");
  const [awards, setAwards] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getContent() {
      setLoading(true);
      let data = await fetch("admin/data/about.json");
      data = await data.json();
      setAbout({ text: data.aboutMe, image: data.aboutMeImage });
      setAwards([...data.awards]);
      setExhibitions([...data.exhibitions]);
      setClients([...data.Clients]);
      setLoading(false);
    }
    getContent();
  }, []);

  return (
    <Layout>
      {loading && <Loader />}
      <Container className="aboutme-container">
        <AboutMe {...about} />
        <List header="Awards" list={awards} />
        <List header="Exhibitions" list={exhibitions} />
        <Clients clients={clients} />
      </Container>
    </Layout>
  );
}

export default Contact;
