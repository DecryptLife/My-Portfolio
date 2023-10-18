import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="container section-container">
        <div className="section-header">
          <h1 className="section-header-text">My Work Experience</h1>
        </div>
        <b>
          <p>
            With around two years of experience I have learned and have been
            able to contribute which has helped me grow my knowledge and
            skillset in the field of computer science. During Summer 23, I
            worked as a Software Developer/ML Engineer Intern at Affekta LLC, a
            startup that's focused on optimizing e-learning using Artificial
            Intelligence. Before starting off my MCS at Rice University, I
            worked as an Associate Software Developer for around a year where I
            was exposed to the world of software development where I worked with
            technologies like SpringBoot, MySQL, etc. These experiences have
            been instrumental in shaping my career and fueling my passion for
            technology
          </p>
        </b>

        <div className="resume-container">
          <div className="resume-wrapper">
            <div className="resume-card">
              <div className="work-exp affekta">
                <div className="work-exp-header">
                  <div className="work-exp-icon">
                    <img
                      src="./affekta.jpeg"
                      alt="affekta-icon"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="work-exp-title">
                    <b>
                      <h2>Affekta</h2>
                    </b>
                    <h6>Software Developer/ML Engineer Intern</h6>
                  </div>
                </div>
                <div className="work-exp-body">
                  <ul className="custom-bullet">
                    <li>
                      Improved the frontend code for the startup’s platform,
                      creating and enhancing web pages and components using
                      React, resulting in approximately 30% improvement in user
                      page load times
                    </li>
                    <li>
                      Conducted research and utilized AI APIs to develop a
                      pipeline, enhancing the platform’s capabilities thereby
                      producing a 20% increase in user engagement
                    </li>
                    <li>
                      Gathered valuable feedback and insights through customer
                      interactions which was leveraged to make modifications to
                      the website which reduced the bounce rates by 25%
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <br />
              <div className="work-exp virtusa">
                <div className="work-exp-header">
                  <div className="work-exp-icon">
                    <img
                      src="./virtusa.jpeg"
                      alt="virtusa icon"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="work-exp-title">
                    <b>
                      <h2>Virtusa</h2>
                    </b>
                    <h6>Associate Software Engineer</h6>
                  </div>
                </div>
                <div className="work-exp-body">
                  <ul className="custom-bullet">
                    <li>
                      Played an integral role in the development of 3 Spring
                      Boot projects, demonstrating expertise in building robust
                      and high-performance applications achieving more than 90%
                      team satisfaction{" "}
                    </li>
                    <li>
                      Maintained a consistent position as the top performer
                      within the group, constantly achieving above 85% code
                      quality scores and earned responsibility for new and
                      challenging projects
                    </li>
                    <li>
                      Mentored and coached 3 junior developers in mastering
                      Spring Boot, accelerating the onboarding process and
                      enhancing team productivity by approximately 50%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
