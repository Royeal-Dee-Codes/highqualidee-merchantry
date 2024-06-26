import "../../styles/app.scss";

const About = () => {
  return (
    <div
      style={{
        margin: 33,
        padding: 11,
      }}
    >
      <h1>Built From Scratch</h1>
      <div className="main-about-container">
        <div className="about-container">
          <div className="about-image"> </div>

          <div className="about-text">
            <h3>Explain your capstone</h3>
            <p className="explain-capstone">
              My main focus has been on project structure, foundation, routing,
              as well as logic and understanding. I thought it would be a good
              idea to combine the components that we have been working on
              throughout the course into one project. I want to make sure that I
              am understanding the concepts and the fundamentals of each
              component and how they work together to ensure the ability to
              properly implement functional and aesthetically pleasing React
              Apps. It is also very important for me to know what I am capable
              of doing on my own and what stregths and weaknesses I bring to the
              table. Although I have full faith in our teams ability to come
              together to build and find solutions, I do not want to be solely
              dependent upon others and would like to develop the ability to
              work independently without fear or hinderance.
            </p>
            <h3>Explain what you learned throughout your time here</h3>
            <p className="explain-learned">
              <p>
                "I have learned a lot and I am still learning. I have a deep and
                profound appreciation for the knowledge that I have acquired and
                for the outlet that has been provided for me to learn and grow.
                I have a desire to be skilled in this field of knowledge and I
                am doing my best to restructure my mind to embrace the
                possibilities."
              </p>
            </p>
            <h3>Explain your favorite language and why</h3>
            <p className="explain-favorite">
              <p>
                "Inconclusive due to insufficient data. I've only just begun
                with a mere handful of languages and deciding on a favorite
                would be jumping to conclusions. Right now I am doing my best to
                identify the structure and the components that are congruent
                within each language and becoming more familiar with the syntax
                and the logic while developing a better understanding of the
                foundation of each language. I would like to say that I can't
                help but have an attraction to this form of knowledge. I am
                enjoying my time and I am looking forward to learning more. I am
                doing my best to absorb as much as I can at as accelerated a
                rate as able. Although I am aware of the time constraints of the
                course, I am in no rush because my competition is with my former
                Self and my goal is to develop a better understanding of the
                fundamentals and to become a better programmer."
              </p>
            </p>
          </div>

          <div className="capstone-process">
            <h3>Explain the Process of your Capstone</h3>
            <p>
              I decided to keep working on my fist Capstone and do some major
              refactoring and improvements. I am still in the process of
              refactoring. There are many things I still need to fix.{" "}
            </p>
          </div>
          <div className="course-struggles">
            <h3>
              Explain struggles you experienced throughout the frontend course
              and how you solved them.
            </h3>
            <p>
              I am very grateful to have been able to retake the frontend
              course. It did help me fill in a lot of the holes in my Swiss
              Cheese knowledge and further develop me skill and understanding. I
              plan on continuing working on my projects and improving them for
              my portfolio.
            </p>
          </div>
          <div className="favorite-language">
            <h3>Explain your favorite language and why.</h3>
            <p>
              With time I have found that I do like the languages we use in the
              Dev Shop like python, javascript, html and I am getting better
              with scss and styling.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
