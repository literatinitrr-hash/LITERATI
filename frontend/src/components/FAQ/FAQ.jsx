import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What could be the size of the team?",
    answer:
      "We are only looking for groups of 2 to 4 participants this time. Solo participation is not allowed."
  },
  {
    question: "What is the participation fee?",
    answer:
      "There is no participation fee. The event is completely free for all selected teams."
  },
  {
    question: "Who can participate?",
    answer:
      "Students from any college or university are welcome to participate, regardless of their branch or year."
  },
  {
    question: "Is prior experience required?",
    answer:
      "No prior hackathon experience is required. Beginners are welcome and encouraged to participate."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h2 className="faq-title">FAQ&apos;s</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "✕" : "+"}
              </span>
            </button>

            <div
              className={`faq-answer-wrapper ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;