function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about-text-container">
            <h1 className=" about-text-header">Hi, I'm Benson.</h1>
            <b>
              <p className="about-text-detail">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
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
