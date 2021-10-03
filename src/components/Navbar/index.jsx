import React from 'react';
import { BRAND_NAME } from '../../utils/constants';

import './index.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__container">
      {/* <img src={LOGO} alt="logo" /> */}
      <p className="navbar__title">{BRAND_NAME}</p>
    </div>
  </nav>
  );

export default Navbar;
