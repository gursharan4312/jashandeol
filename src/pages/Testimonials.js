import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(
    testimonials.length >= 0 ? 0 : null
  );
  const next = () =>
    setSelectedIndex((selectedIndex + 1) % testimonials.length);
  const previous = () =>
    setSelectedIndex(
      selectedIndex - 1 < 0 ? testimonials.length - 1 : selectedIndex - 1
    );

  useEffect(() => {
    setTestimonials([
      {
        by: "person 1",
        text:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
      },
      {
        by: "person 2",
        text:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of tex",
      },
      {
        by: "person 3",
        text:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    ]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      next();
    }, 5000);
  }, [selectedIndex, next]);
  return (
    <Layout>
      <Container className="pt-4">
        <h2>Testimonials</h2>
        <div className="testimonials-container mt-5 pt-4">
          <div className="testimonial d-flex justify-content-between align-items-center">
            <img
              src="/assests/icons/left.svg"
              alt="previous testimonial"
              onClick={previous}
            />
            <div className="text w-75 ">
              <img src="/assests/icons/quote.svg" alt="quote" />
              <p>{testimonials[selectedIndex].text}</p>
              <small>{testimonials[selectedIndex].by}</small>
            </div>
            <img
              src="/assests/icons/right.svg"
              alt="next testimonial"
              onClick={next}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Testimonials;
