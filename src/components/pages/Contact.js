import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsMessageSent(true);
    setTimeout(() => {
      setIsMessageSent(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out if you have any questions, feedback, or
        inquiries.
      </p>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {isMessageSent && (
          <div className="popup">
            <p>Message sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
}
