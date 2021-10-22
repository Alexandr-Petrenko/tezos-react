import styles from './_Login.module.scss';
import LoginForm from '../../shared/LoginForm/LoginForm.jsx';

const Login = () => {
  const { login } = styles;

  return (
    <section className={login}>
      <LoginForm />
    </section>
  );
};

export default Login;
