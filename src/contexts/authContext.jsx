import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const initialValue = {
  email: null,
  setEmail: () => {},
};

const AuthContext = React.createContext(initialValue);

export const AuthContextProvider = ({ children }) => {
  const [ email, setEmail ] = useState('');

  // TODO: CREATE CUSTOM HOOK LOOK AT SIMPLIFIED WEB TO ACCESS TO LOCAL STORATGE AND GET EMAIL AFTER RELOAD

  return (
    <AuthContext.Provider
      value={{ email, setEmail }}
      >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
