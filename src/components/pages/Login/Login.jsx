import styles from './_Login.module.scss';
import LoginForm from '../../shared/LoginForm/LoginForm.jsx';

const Login = () => (
  <section className={styles.login}>
    <LoginForm />
  </section>
);

export default Login;
