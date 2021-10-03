import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';

import './index.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { isValidEmail, isValidPassword } from '../../utils/functions';
import AuthContext from '../../contexts/authContext';
import { HOME_URL } from '../../utils/urls';

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const [ password, setPassword ] = useState('');
  const [ isFormValid, setIsFormValid ] = useState(false);

  const SECONDS_TO_EXECUTE_INTERVAL = 300;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log('Executed');
      setIsFormValid(isValidEmail(auth.email) && isValidPassword(password));
    }, SECONDS_TO_EXECUTE_INTERVAL);

    return () => {
      clearTimeout(timeOut);
    };
  }, [ auth.email, password ]);

  const onLogin = () => {
    history.push(HOME_URL);
  };

  return (
    <main id="login-page">
      <div className="form">
        <h1 className="form__title">Auth</h1>

        <Input value={auth.email} onChange={auth.setEmail} id="email" placeholder="Email"/>
        <Input value={password} onChange={setPassword} id="password" placeholder="Password" type="password" />

        <Button onClick={onLogin} text="Login" disabled={!isFormValid} />
      </div>
    </main>
  );
};

export default LoginPage;
