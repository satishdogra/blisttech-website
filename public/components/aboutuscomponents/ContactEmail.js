      // Import useState from React
import { useState } from "react";
import styles from "./ContactEmail.module.css"; // Import CSS module

export default function ContactEmail() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Handle change in form input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage('Message sent successfully!');
      } else {
        setStatusMessage('Failed to send message.');
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`col-6 ${styles.contact}`}>
      <h3>CONTACT US</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className={`form-control border-bottom ${styles.form}`}
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
            className={`form-control border-bottom ${styles.formComment}`}
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className={`btn border ${styles.button}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'SEND'}
          </button>
        </div>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}
