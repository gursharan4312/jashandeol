import { useState, useEffect, useRef } from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef(null);
  const next = () =>
    setSelectedIndex((selectedIndex + 1) % testimonials.length);
  const previous = () =>
    setSelectedIndex(
      selectedIndex - 1 < 0 ? testimonials.length - 1 : selectedIndex - 1
    );

  useEffect(() => {
    async function getContent() {
      setLoading(true);
      let data = await fetch("admin/data/testimonials.json");
      data = await data.json();
      console.log(data);
      setTestimonials([...data.testimonials]);
      setSelectedIndex(0);
      setLoading(false);
    }
    getContent();
  }, []);

  useEffect(() => {
    clearTimeout(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      next();
    }, 5000);
    // eslint-disable-next-line
  }, [selectedIndex]);
  return (
    <Layout>
      {loading && <Loader />}
      <Container className="pt-4">
        <h2>Testimonials</h2>
        {testimonials && selectedIndex !== null ? (
          <div className="testimonials-container mt-5 pt-4">
            <div className="testimonial d-flex justify-content-between align-items-center">
              <img
                src="/assests/icons/left.svg"
                alt="previous testimonial"
                onClick={previous}
              />
              <div className="text w-75 ">
                <img src="/assests/icons/quote.svg" alt="quote" />
                <p>{testimonials[selectedIndex].details}</p>
                <small>{testimonials[selectedIndex].name}</small>
              </div>
              <img
                src="/assests/icons/right.svg"
                alt="next testimonial"
                onClick={next}
              />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Container>
    </Layout>
  );
}

export default Testimonials;
