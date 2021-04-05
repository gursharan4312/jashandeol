import Markdown from "markdown-to-jsx";
function AboutMe({ text, image }) {
  return (
    <>
      <h2>About Me</h2>
      <div className="about-section">
        <div className="about-me-text">
          {text && <Markdown>{text}</Markdown>}
        </div>
        <div className="about-me-img">
          <img src={image} className="img-fluid" alt="about me" />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
