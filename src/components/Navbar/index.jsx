import React from 'react';

import POLLITO from '../../assets/img/pollo.svg';
import './index.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__container">
      <img src={POLLITO} alt="pollito" />
      <p className="navbar__title">Pelis de princesas para la princesa</p>
    </div>
  </nav>
  );

export default Navbar;
