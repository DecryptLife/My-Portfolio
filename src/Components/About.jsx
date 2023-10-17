function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about-text-container">
            <h1 className=" about-text-header">Hi, I'm Benson.</h1>
            <b>
              <p className="about-text-detail">
                I am currently pursuing my Masters in Computer Science at Rice
                University with a specialization in Data Science and Machine
                Learning. I am passionate about FullStack Development and have
                work experience as a Software Developer of around two years. I
                love learning new technologies so you will find me learning some
                new technology or programming language every now and then. I
                spend a lot of time developing projects and practicing/learning
                data structures and algorithms. When I am not coding or learning
                something new you can find me at the gym!!
              </p>
            </b>
          </div>
          <div className="image-container">
            <img
              className="image-container-img"
              alt="profile picture"
              src="./headshot.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
