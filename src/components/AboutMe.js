import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Loader from "./Loader";
import { IoLogoInstagram } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";

function AboutMe() {
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
    <Container className="aboutme-container py-4">
      {loading ? (
        <Loader />
      ) : (
        <Row className="py-4 my-4">
          <Col md={4}>
            <img src={profile.image} alt="jashandeol" className="img-fluid" />
          </Col>
          <Col>
            <h1>{profile.header}</h1>
            <p>{profile.details}</p>
            <ListGroup flush>
              {profile.phoneNumber && (
                <ListGroupItem>
                  {" "}
                  <BiPhoneCall /> : {profile.phoneNumber}
                </ListGroupItem>
              )}
              {profile.email && (
                <ListGroupItem>
                  {" "}
                  <HiOutlineMail /> : {profile.email}
                </ListGroupItem>
              )}
              {profile.instaUsername && (
                <ListGroupItem>
                  <IoLogoInstagram /> : {profile.instaUsername}
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default AboutMe;
