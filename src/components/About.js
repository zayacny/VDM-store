import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>Welcome to our About page!</h2>
      <p>
        We are a team of three developers - Mykola Zaytsev, Viktor Savitskiy,
        and Dmytro Lykholit - who are passionate about creating amazing web
        applications.
      </p>
      <p>
        We are excited to introduce our latest project, a movie finder with a
        smart search, teasers, and ratings. Our movie finder is built using
        React, a powerful JavaScript library for building user interfaces. We
        wanted to create a website that makes it easy for users to find and
        discover new movies based on their interests. With our smart search
        functionality, users can quickly find the movies they are looking for.
        In addition to our search feature, we also offer teasers for each movie,
        giving users a sneak peek at the movie's storyline and cast. We also
        provide ratings for each movie, so users can make informed decisions
        about what to watch next. We are proud of our work on this project and
        are excited to continue adding new features and improving the user
        experience.
      </p>
      <p>
        Thank you for visiting our About page, and we hope you enjoy using our
        movie finder!
      </p>
    </div>
  );
};

export default About;
