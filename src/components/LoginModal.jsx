import React from "react";

const LoginModal = ({ onClose }) => {
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
        <h2>Connexion</h2>
        <form>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Mot de passe
            <input type="password" name="password" />
          </label>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
