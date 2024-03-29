import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Loader from "../components/Loader";
import { IoLogoInstagram } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      let data = await fetch("admin/data/profile.json");
      data = await data.json();
      setProfile({ ...data });
      setLoading(false);
    }
    getProfile();
  }, []);
  return (
    <Layout>
      <Container className="aboutme-container py-4">
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col md={4}>
              <img src={profile.image} alt="jashandeol" className="img-fluid" />
            </Col>
            <Col>
              <h1>{profile.header}</h1>
              <p>{profile.details}</p>
              <ListGroup flush>
                {profile.phoneNumber && (
                  <ListGroupItem>
                    <a href={`tel:${profile.phoneNumber}`}>
                      <BiPhoneCall /> : {profile.phoneNumber}
                    </a>
                  </ListGroupItem>
                )}
                {profile.email && (
                  <ListGroupItem>
                    <a href={`mailto:${profile.emai}`}>
                      <HiOutlineMail /> : {profile.email}
                    </a>
                  </ListGroupItem>
                )}
                {profile.instaUsername && (
                  <ListGroupItem>
                    <a
                      href={`https://www.instagram.com/${profile.instaUsername}/`}
                    >
                      <IoLogoInstagram /> : {profile.instaUsername}
                    </a>
                  </ListGroupItem>
                )}
              </ListGroup>
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
}

export default Contact;
