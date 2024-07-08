import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Meta4invest</h2>
          <p>
            Meta4invest est une entreprise spécialisée dans le conseil en
            investissement et la gestion d’épargne. Notre mission est
            d'accompagner nos clients dans leurs placements financiers, en
            offrant une rentabilité élevée et une transparence totale.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Liens Utiles</h2>
          <ul>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portefeuille</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contactez-nous</h2>
          <p>Email: contact@meta4invest.com</p>
          <p>Téléphone: +33 6 12946150</p>
          <p>Adresse: Inniscara, Rathcoole, Dublin, D24EO29, Ireland</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Meta4invest. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
