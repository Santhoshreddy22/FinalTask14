import { useState } from "react";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] =
    useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = e => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const validateForm = () => {

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email =
        "Email is required.";
    } else if (
      !/\S+@\S+\.\S+/.test(
        form.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = e => {

    e.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">

      <div className="page-header">

        <span className="small-title">
          GET IN TOUCH
        </span>

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
        </p>

      </div>

      <div className="contact-layout">

        <div className="contact-info">

          <h2>Let's Talk</h2>

          <p>
            Have a question about our products?
            Our support team is ready to help.
          </p>

          <div className="contact-detail">
            📧 support@shopsphere.com
          </div>

          <div className="contact-detail">
            📞 +91 98765 43210
          </div>

          <div className="contact-detail">
            📍 Hyderabad, Telangana
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <label>
            Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && (
            <small>
              {errors.name}
            </small>
          )}

          <label>
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && (
            <small>
              {errors.email}
            </small>
          )}

          <label>
            Message
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="6"
          />

          {errors.message && (
            <small>
              {errors.message}
            </small>
          )}

          <button
            type="submit"
            className="primary-btn"
          >
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              ✅ Message sent successfully!
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;