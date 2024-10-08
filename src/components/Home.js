import React from "react";

import ProfilePictureIcon from "../assets/images/akhil.jpeg";

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="home-container__inner home-container__animated">
        <figure>
          <img className="home-profile-pic" alt="Akhilesh Sooji" src={ProfilePictureIcon} />
        </figure>
        <article>
          <h1 className="home-title">
                        Akhilesh A Sooji
          </h1>
          <p className="home-description">
                        MERN-Full Stack Developer
          </p>
        </article>
      </div>
    </div>
  );
}
