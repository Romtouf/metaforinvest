import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Votre Portefeuille</h1>
      <p>Consultez et gérez votre portefeuille d'investissement ici.</p>
      <div className="portfolio-details">
        <div className="portfolio-item">
          <h2>Investissement en Cours</h2>
          <p>Montant : 10,000 €</p>
          <p>Rentabilité : 12%</p>
        </div>
        <div className="portfolio-item">
          <h2>Investissement Passé</h2>
          <p>Montant : 5,000 €</p>
          <p>Rentabilité : 10%</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
