"use client";

import { useState } from "react";
import styles from "./AboutBlisttech.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({type: 'success', message: 'Sending...'});

    try {
      const res = await fetch("/api/ContactFormHome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setMessage({ type: 'success', message: 'Your message has been sent successfully!' });
        setFormData({ name: "", email: "", phone: "", comment: "" });
      } else {
        setMessage({ type: 'danger', message: 'There was an error sending your message.' });
      }
    } catch (error) {
      setMessage({ type: 'danger', message: 'There was an error sending your message.' });
    }
  };

  return (
    <div className={styles.contactForm}>
      <h3>CONTACT US</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className={`form-control border-bottom ${styles.form} ${styles.noFocusBorder}`}
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className={`form-control border-bottom ${styles.form}`}
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="phone"
            className={`form-control border-bottom ${styles.form}`}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="comment"
            className={`form-control border-bottom ${styles.formComment} ${styles.form}`}
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-grid gap-2">
          <button className={`btn border ${styles.button}`} type="submit">
            Send
          </button>
        </div>
      </form>

     {message &&(
      <div className={`alert alert-${message.type} alert-dismissible fade show mt-3`} role="alert">
        <strong>{message.message}</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
     )}

    </div>
  );
}