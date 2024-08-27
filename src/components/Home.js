import React from "react";

import ProfilePictureIcon from "../assets/images/IMG_5899.jpg";

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="home-container__inner home-container__animated">
        <figure>
          <img className="home-profile-pic" alt="Profile" src={ProfilePictureIcon} />
        </figure>
        <article>
          <h1 className="home-title">
                        Akhilesh Sooji
          </h1>
          <p className="home-description">
                        Full-Stack Developer
          </p>
        </article>
      </div>
    </div>
  );
}
