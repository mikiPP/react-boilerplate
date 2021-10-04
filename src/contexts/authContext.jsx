import React from 'react';
import PropTypes from 'prop-types';
import { useSessionStorage } from '../hooks/useStorage';

export const initialValue = {
  email: null,
  setEmail: () => {},
};

const AuthContext = React.createContext(initialValue);

export const AuthContextProvider = ({ children }) => {
  const [ email, setEmail ] = useSessionStorage('email', '');

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
