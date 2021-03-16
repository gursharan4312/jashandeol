import React from "react";
import AboutMe from "../components/AboutMe";
import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout className="py-4">
      <AboutMe />
      <ContactSection />
    </Layout>
  );
}

export default Contact;
