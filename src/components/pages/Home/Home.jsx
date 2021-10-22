import styles from './_Home.module.scss';
import Info from '../../shared/Info';
import { ApiProvider } from '../../Providers/ApiProvider.jsx';

const Home = () => {
  const { home } = styles;

  return (
    <main className={home}>
      <ApiProvider>
        <Info />
      </ApiProvider>
    </main>
  );
};

export default Home;
