import React from "react";
import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <Layout type="home">
      <Hero />
      <AboutMe />
      <Portfolio />
      <ContactSection />
    </Layout>
  );
}

export default Home;
