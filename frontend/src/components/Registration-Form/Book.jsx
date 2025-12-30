import React, { useState } from "react";
import "./Book.css";
import bgGif from "../../assets/1213.gif";
import bookSvg from "../../assets/slazzer-preview-npzbp.svg";

const spreads = [
  {
    left: [
      { label: "Email", name: "email", type: "email" },
      { label: "Password", name: "password", type: "password" },
      { label: "Name", name: "Name", type: "text" },
    ],
    right: [
      { label: "Phone", name: "phone", type: "tel" },
      { label: "College", name: "college", type: "text" },
    ],
  },
  {
    left: [
      { label: "Year / Class", name: "year", type: "text" },
      { label: "Major", name: "major", type: "text" },
    ],
    right: [
      { label: "City", name: "city", type: "text" },
      { label: "State", name: "state", type: "text" },
    ],
  },
];

const Book = () => {
  const [spread, setSpread] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const isCurrentSpreadValid = () => {
  const current = spreads[spread];

  const requiredFields = [
    ...current.left,
    ...current.right,
  ].map((f) => f.name);

  return requiredFields.every(
    (name) => formData[name] && formData[name].trim() !== ""
  );
};


  return (
    <div className="book-container book">
      <img src={bgGif} className="bg" alt="background" />
      <img src={bookSvg} className="book-img" alt="book" />

      <form className="form" onSubmit={handleSubmit}>

        {/* BOOK SPREAD */}
        <div className="spread">
  {/* LEFT PAGE */}
  <div className="page">
    {spread === 0 && (
      <h2 style={{margin:"auto"}} className="heading">Registration Form</h2>
    )}

    {spreads[spread].left.map((f) => (
      <div key={f.name} className="field">
        <label>{f.label}</label>
        <input
          type={f.type}
          name={f.name}
          value={formData[f.name] || ""}
          onChange={handleChange}
          required
          placeholder={f.label}
        />
      </div>
    ))}
  </div>

  {/* RIGHT PAGE */}
  <div className="page">
    {spread === 0 && (
      <h2 style={{visibility:"hidden"}} className="heading">Registration Form</h2>
    )}

    {spreads[spread].right.map((f) => (
      <div key={f.name} className="field">
        <label>{f.label}</label>
        <input
          type={f.type}
          name={f.name}
          value={formData[f.name] || ""}
          onChange={handleChange}
          required
          placeholder={f.label}
        />
      </div>
    ))}
  </div>
</div>

        {/* NAVIGATION */}
        <div className="nav">
          {spread > 0 && (
            <button
  type="button"
  onClick={() => setSpread(spread - 1)}
>
  ← Previous
</button>
          )}

          {spread < spreads.length - 1 ? (
            <button
  type="button"
  onClick={() => setSpread(spread + 1)}
  disabled={!isCurrentSpreadValid()}
  className={!isCurrentSpreadValid() ? "disabled" : ""}
>
  Next →
</button>

          ) : (
            <button
  type="submit"
  disabled={!isCurrentSpreadValid()}
>
  Register
</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Book;
