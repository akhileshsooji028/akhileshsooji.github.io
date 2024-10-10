import React from "react";
export default function About() {
  return (
    <div className="about-wrapper">
      <div>
        <h1>{"Hi, I'm Akhilesh! 👋"}</h1>
        <blockquote>
          <p>💻 MERN-Full-stack Developer</p>
        </blockquote>
        <p className="about-links-container">
          <a href="https://www.linkedin.com/in/akhileshsooji028/">
            <img
              alt="Linkedin: @akhielsh-sooji"
              src="https://img.shields.io/badge/-Akhielsh%20Sooji-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/akhileshsooji028/"
            />
          </a>
          <a href="mailto:akhisooji028@gmail.com">
            <img
              src="https://img.shields.io/badge/Gmail-@akhileshsooji-red"
              alt="Gmail: @akhileshsooji"
            />
          </a>
          <a href="https://stackoverflow.com/users/10894717/akhileshsooji028">
            <img
              src="https://img.shields.io/badge/-Stack%20Overflow-222222?logo=stack-overflow&link=https://stackoverflow.com/users/story/6241000"
              alt="Stack Overflow: Akhilesh"
            />
          </a>
          <a href="https://github.com/akhileshsooji028">
            <img
              src="https://img.shields.io/github/followers/akhileshsooji028?label=follow&style=social"
              alt="GitHub: @akhileshsooji"
            />
          </a>
        </p>
        <p>With 6+ years in software development, I&apos;ve mastered crafting robust, scalable solutions. I excel in problem-solving, algorithm design, and communicating complex ideas to non-technical stakeholders.</p>
        <p>I consistently exceed expectations as both an individual contributor and team player. My expertise in multiple frameworks allows quick adaptation to new technologies and project needs</p>
        <p>I pride myself on clean, maintainable code and optimizing performance. My experience covers full-stack development, cloud computing, and best practices in software architecture.</p>
        <p>Outside work, I enjoy travel 🚶, video games 🕹️, music 🎧, and movies 📺. These interests inspire unique approaches to technical challenges.</p>
        <p>I thrive on intellectual stimulation and enjoy connecting with professionals across industries. Feel free to reach out via email to discuss ideas or potential collaborations.</p>
        <p>Let&apos;s connect and create something extraordinary together!</p>
        <hr className="about-separator" />
        <h2>⚡ Technical Skills ⚡</h2>
        <table className="about-skills-table">
          <thead>
            <tr>
              <th>Area</th>
              <th>Proficiencies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FrontEnd</td>
              <td>React, Vue 3, Handlebars, EJS(Embedded JS), Tailwind CSS, Bootstrap, Webpack</td>
            </tr>
            <tr>
              <td>BackEnd</td>
              <td>Node.js, Express, Hapi, AWS API Gateway, API lambda, AWS Cloudwatch, S3</td>
            </tr>
            <tr>
              <td>CI/CD</td>
              <td>Travis CI, GitHub Actions</td>
            </tr>
            <tr>
              <td>DevOps</td>
              <td>Docker, Nginx, EC2 deployment</td>
            </tr>
            <tr>
              <td>Web technologies</td>
              <td>HTML5, CSS3, ES7+</td>
            </tr>
            <tr>
              <td>Databases</td>
              <td>PostgreSQL, MySQL, MongoDB (Mongoose)</td>
            </tr>
            <tr>
              <td>Misc</td>
              <td>Git, Eslint, Prettier, Typescript</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>Javascript, Typescript, YAML</td>
            </tr>
            <tr>
              <td>Third Party API Integration</td>
              <td>Stripe payment, Gitlab API, Amazon ads API, Ship Station API, Keycloak...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
