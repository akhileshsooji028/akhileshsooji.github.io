import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ReactComponent as WorkIcon } from "../assets/icons/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/icons/school.svg";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";

export default function Home() {
  return (
    <div>
      <h2 style={{"text-align": "center", "fontWeight": "bold", textDecorationLine: "underline"}}>Work experience & Education</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2022 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"><span style={{fontWeight: "bold", "text-decoration-line": "underline"}}>WizardTales GmbH</span></h3>
          <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
          <h5 className="vertical-timeline-element-subtitle"><span style={{fontWeight: "bold"}}>URL:</span> <a style={{"text-decoration-line": "none"}} href="https://sl.dev.o4oe.de/" target="_blank" rel="noopener noreferrer">https://sl.dev.o4oe.de/</a></h5>
          <h5 className="vertical-timeline-element-subtitle"><span style={{fontWeight: "bold"}}>Tech Stack Used:</span> [Hapi JS, Postgresql, Vue 3, Webpack, Docker, Gitlab API]</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2021 - November 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"><span style={{fontWeight: "bold", "text-decoration-line": "underline"}}>Webmanufact Pvt Ltd, Bangalore</span></h3>
          <h4 className="vertical-timeline-element-subtitle">MERN Stack Developer</h4>
          <h5 className="vertical-timeline-element-subtitle"><span style={{fontWeight: "bold"}}>URL:</span> <a style={{"text-decoration-line": "none"}} href="https://gateway.mypackageforwarder.com/" target="_blank" rel="noopener noreferrer">Dashboard: https://gateway.mypackageforwarder.com/</a></h5>
          <h5 className="vertical-timeline-element-subtitle"><span style={{fontWeight: "bold"}}>URL:</span> <a style={{"text-decoration-line": "none"}} href="https://mypackageforwarder.com/" target="_blank" rel="noopener noreferrer">Landing Page: https://mypackageforwarder.com/</a></h5>
          <h5 className="vertical-timeline-element-subtitle"><span style={{fontWeight: "bold"}}>Tech Stack Used:</span> [Express JS, React JS, SQL, EC2, S3, ShipStation API, Nginx]</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2020 – March 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"><span style={{fontWeight: "bold", "text-decoration-line": "underline"}}>Dexler Education - Gyanamite, Bangalore</span></h3>
          <h4 className="vertical-timeline-element-subtitle">MERN Stack Developer</h4>
          <h5 className="vertical-timeline-element-subtitle"><span style={{fontWeight: "bold"}}>Tech Stack Used:</span> [AWS lambda, API Gateway, S3, EC2, CloudWatch, React JS, mongoDB]</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2018 – March 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"><span style={{fontWeight: "bold", "text-decoration-line": "underline"}}>7Kutewon Technologies Pvt Ltd (Thruskills) - Bangalore</span></h3>
          <h4 className="vertical-timeline-element-subtitle">MERN Stack Developer</h4>
          <h5 className="vertical-timeline-element-subtitle"><span style={{fontWeight: "bold"}}>Tech Stack Used:</span> [AWS lambda, API Gateway, S3, EC2, CloudWatch, React JS, mongoDB]</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2014 – June 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"><span style={{fontWeight: "bold", "text-decoration-line": "underline"}}>KLS Gogte Institute of Technology - Belgaum</span></h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor of Engineering in Electronics and Communication</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2009 - July 2014"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"><span style={{fontWeight: "bold", "text-decoration-line": "underline"}}>KLS Shri Vasantrao Potdar Polytechnic – Belgaum</span></h3>
          <h4 className="vertical-timeline-element-subtitle">Diploma in Electronics and Communication</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2009"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"><span style={{fontWeight: "bold", "text-decoration-line": "underline"}}>Presidency School, Bangalore South, India</span></h3>
          <h4 className="vertical-timeline-element-subtitle">High School</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}
