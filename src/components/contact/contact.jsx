import React, { useState } from "react";
import "./contact.css";
import gmail from "../../assets/gmail.png";
import location from "../../assets/location.png";
import phone_call from "../../assets/phone_call.png";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    //  Validation
    if (!name || !email || !message) {
      toast.error("All fields are required ❗");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Enter valid email ❗");
      return;
    }

    formData.append("access_key", "40f7d503-8d94-4ae9-9d56-4666054bc428");

    try {
      setLoading(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");
        event.target.reset();
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Network error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>
            I’m currently looking for opportunities to learn and grow. If you
            have a project, internship, or job opportunity, I’d love to hear
            from you.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <img src={gmail} alt="" />
              <span>Shraag97@gmail.com</span>
            </div>

            <div className="contact-item">
              <img src={phone_call} alt="" />
              <span>7887240202</span>
            </div>

            <div className="contact-item">
              <img src={location} alt="" />
              <span>India</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="input-group">
              <input type="text" name="name" required />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input type="email" name="email" required />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <textarea name="message" rows="5" required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" disabled={loading} className="contact-btn">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
