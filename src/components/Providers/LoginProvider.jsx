import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const checkEmail = () => {
    const valid =
      /^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)(.*@.+(\..{1,11})?)$/;

    const isValid = valid.test(email) && email !== '';
    setIsEmailValid(isValid);
  };

  const checkPassMatch = () => {
    const isMatch =
      passwordConfirmation === password && passwordConfirmation !== '';

    setIsPasswordMatch(isMatch);
  };

  const checkPassword = () => {
    const valid =
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;

    const isValid = valid.test(password) && password !== '';
    setIsPasswordValid(isValid);
    checkPassMatch();
  };

  const verifyForm = () => {
    checkPassword();
    checkEmail();
    checkPassMatch();

    if (isEmailValid && isPasswordValid && isPasswordMatch) {
      // eslint-disable-next-line no-alert
      alert(`Email: ${email}, Password: ${password}`);
    }
  };

  const INPUTS_CONFIG = [
    {
      id: 0,
      type: 'email',
      onChange: setEmail,
      name: 'Email',
      error: 'Invalid email',
      errorCondition: isEmailValid,
    },
    {
      id: 1,
      type: 'password',
      onChange: setPassword,
      name: 'Password',
      error:
        'Password must contain only latin letters, 1 upper-case character, 1\n' +
        '          lower-case character, one number and one special character.',
      secondClass: true,
      errorCondition: isPasswordValid,
    },
    {
      id: 2,
      type: 'password',
      onChange: setPasswordConfirmation,
      name: 'Password confirmation',
      error: 'Password doesn’t match',
      errorCondition: isPasswordMatch,
    },
  ];

  useEffect(() => checkEmail(), [email]);
  useEffect(() => checkPassword(), [password]);
  useEffect(() => checkPassMatch(), [passwordConfirmation]);

  return (
    <LoginContext.Provider
      value={{
        verifyForm,
        INPUTS_CONFIG,
        setIsEmailValid,
        setIsPasswordValid,
        setIsPasswordMatch,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
