import React from "react";

const Services = () => {
  return (
    <div className="services">
      <h1>Nos Services</h1>
      <div className="service-list">
        <div className="service-item">
          <h2>Gestion de Portefeuille</h2>
          <p>
            Nous gérons vos portefeuilles avec expertise, en assurant une
            rentabilité élevée et une transparence totale.
          </p>
        </div>
        <div className="service-item">
          <h2>Conseil en Investissement</h2>
          <p>
            Nos experts vous accompagnent dans vos décisions d'investissement
            pour optimiser vos rendements.
          </p>
        </div>
        <div className="service-item">
          <h2>Planification Financière</h2>
          <p>
            Nous vous aidons à planifier vos finances pour atteindre vos
            objectifs à long terme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
