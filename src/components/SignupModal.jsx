import React from "react";

const SignupModal = ({ onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Inscription</h2>
        <form>
          <label>
            Nom
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Mot de passe
            <input type="password" name="password" />
          </label>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
