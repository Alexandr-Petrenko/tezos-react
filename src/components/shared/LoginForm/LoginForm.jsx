import classNames from 'classnames';
import { useEffect } from 'react';
import { useLogin } from '../../Providers/LoginProvider.jsx';
import styles from './_LoginForm.module.scss';

const LoginForm = () => {
  const {
    INPUTS_CONFIG,
    setIsEmailValid,
    setIsPasswordValid,
    setIsPasswordMatch,
    verifyForm,
  } = useLogin();
  const {
    form,
    formWrapper,
    formInput,
    formButton,
    formError,
    formErrorAdvice,
    formPlaceholder,
    formTitle,
  } = styles;
  const config = [...INPUTS_CONFIG];

  return (
    <form className={form}>
      <h2 className={formTitle}>Login</h2>
      {config.map((item) => {
        const { id, type, onChange, name, error, secondClass, errorCondition } =
          item;

        useEffect(() => setIsEmailValid(true), []);
        useEffect(() => setIsPasswordValid(true), []);
        useEffect(() => setIsPasswordMatch(true), []);

        return (
          <div className={formWrapper} key={id}>
            <input
              type={type}
              onChange={(e) => onChange(e.target.value)}
              className={formInput}
            />
            <span className={formPlaceholder}>{name}</span>
            {!errorCondition ? (
              <span
                className={classNames(
                  formError,
                  secondClass ? formErrorAdvice : '',
                )}
              >
                {error}
              </span>
            ) : null}
          </div>
        );
      })}
      <button type="button" className={formButton} onClick={verifyForm}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
