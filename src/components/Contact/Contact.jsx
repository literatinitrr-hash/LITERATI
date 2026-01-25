import React, {useRef, useState} from 'react'
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import { Lightbulb, Pencil, Users } from "lucide-react"
import { div } from 'framer-motion/client';
import stats from "../../assets/stats.mp4";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false)
  const [emailError, setEmailError] = useState("")

  const TickAnimation = () => (
  <motion.svg
    viewBox="0 0 52 52"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    style={{ stroke: "green", strokeWidth: 4, fill: "none", width: 50 }}
  >
    <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
  </motion.svg>
);

  const sendEmail = (e) => {
    e.preventDefault();
    const PUBLIC_KEY = "AZ_Lf9txAFb37EdBN";
    const SERVICE_ID = "service_r1lkajw";
    const TEMPLATE_ID = "template_g50ixpa";

    const email = form.current.email.value;
      if(!email.includes('@')) {
        setEmailError('Please enter a valid email');
        return;
      }
      setEmailError("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSuccess(true);    
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="contact">
  <video
    className="contact-bg-video"
    src={stats}
    autoPlay
    loop
    muted
    playsInline
  />

  <div className="contact-overlay"></div>

  <div className="contact-content">

    {isSuccess && (
      <div className="success-overlay" onClick={() => setIsSuccess(false)}>
        <div className="success-popup" onClick={(e) => e.stopPropagation()}>
          <TickAnimation />
          <p>Message sent successfully</p>
        </div>
      </div>
    )}

    <h2>Contact Us</h2>

    <form ref={form} className="contact-form" onSubmit={sendEmail} noValidate>
      <h3>Send us a message</h3>

      <div className="input-box">
        <label>Name</label>
        <input type="text" name="name" placeholder="Your Name" required />
      </div>

      <div className="input-box">
        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" required />
        {emailError && <p className="error-text">{emailError}</p>}
      </div>

      <div className="input-box">
        <label>Your Message</label>
        <textarea
          name="message"
          placeholder="Message"
          className="input-message"
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>

  </div>
</section>
  );
};

export default Contact
