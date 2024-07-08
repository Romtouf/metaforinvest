import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
