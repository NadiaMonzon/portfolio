const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h3 className="contact__title">Feel free to contact me through:</h3>
      <h4 className="contact__title--social">
        <a
          href="https://github.com/NadiaMonzon"
          target="blank"
          className="contact__link"
          alt="Take a look at my GitHub profile"
        >
          Github
        </a>
      </h4>
      <h4 className="contact__title--social">
        <a
          href="https://www.linkedin.com/in/nadiamonzon/"
          className="contact__link"
          alt="Take a look at my LinkedIn profile"
        >
          LinkedIn
        </a>
      </h4>
      <h4 className="contact__title--social">
        <a href="mailto:nadiamonque99@gmail.com" className="contact__link">
          Mail
        </a>
      </h4>
    </section>
  );
};

export default Contact;
