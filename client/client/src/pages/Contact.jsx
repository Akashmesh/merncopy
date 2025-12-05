import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <section className="page page--form">
      <main className="form-card">
        <h1 className="form-title">Contact Us</h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              value={contact.username}
              onChange={handleInput}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              value={contact.email}
              onChange={handleInput}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={contact.message}
              onChange={handleInput}
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="btn btn--primary form-button">
            Contact
          </button>
        </form>
      </main>
    </section>
  );
};