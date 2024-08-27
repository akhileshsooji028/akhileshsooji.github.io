import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send("service_u77q0or", "template_ul39fee", templateParams, {
        publicKey: "yZPSevmhi2wp0lfS7",
      })
      .then(
        (response) => {
          console.log(response)
          setName("");
          setEmail("");
          setMessage("");
          setShowAlert(true);
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send the email");
        }
      );
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="contact-container">
      <article>
        <h2 className="contact-header">Contact Me</h2>
        <p className="contact-text">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-container">
            <div className="contact-form-name">
              <input
                className="contact-message-form-field"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="contact-form-email">
              <input
                className="contact-message-form-field"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>
            <div className="clearfix">
              <textarea
                className="contact-message-form-field contact-message-textarea"
                id="message"
                name="message"
                placeholder="Add message here"
                spellCheck="false"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                maxLength={2000}
              />
            </div>
            <div className="clearfix">
              <input
                type="submit"
                id="send"
                value="Submit"
                className="contact-submit-btn"
              />
            </div>
          </div>
        </form>

        {showAlert && (
          <div className="alert-box">
            <div className="alert-content">
              <p>Email sent successfully!</p>
              <button onClick={closeAlert}>OK</button>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
