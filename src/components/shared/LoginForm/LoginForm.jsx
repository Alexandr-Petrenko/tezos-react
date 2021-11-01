import classNames from 'classnames';
import { useEffect } from 'react';
import { useLogin } from '../../Context/LoginContext.jsx';
import styles from './_LoginForm.module.scss';

const LoginForm = () => {
  const {
    INPUTS_CONFIG,
    setIsEmailValid,
    setIsPasswordValid,
    setIsPasswordMatch,
    verifyForm,
  } = useLogin();
  const config = [...INPUTS_CONFIG];

  return (
    <form className={styles.form}>
      <h2 className={styles.form__title}>Login</h2>
      {config.map((item) => {
        const { id, type, onChange, name, error, secondClass, errorCondition } =
          item;

        useEffect(() => setIsEmailValid(true), []);
        useEffect(() => setIsPasswordValid(true), []);
        useEffect(() => setIsPasswordMatch(true), []);

        return (
          <div className={styles.form__wrapper} key={id}>
            <input
              type={type}
              onChange={(e) => onChange(e.target.value)}
              className={styles.form__input}
            />
            <span className={styles.form__placeholder}>{name}</span>
            {!errorCondition ? (
              <span
                className={classNames(
                  styles.form__error,
                  secondClass ? styles['form__error--advice'] : '',
                )}
              >
                {error}
              </span>
            ) : null}
          </div>
        );
      })}
      <button
        type="button"
        className={styles.form__button}
        onClick={verifyForm}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
