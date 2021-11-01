import styles from './_Home.module.scss';
import Info from '../../shared/Info';
import { ApiProvider } from '../../Context/ApiContext.jsx';
import Skills from '../../shared/Skills';
import Description from '../../shared/Description';
import Team from '../../shared/Team';
import Footer from '../../shared/Footer';

const Home = () => (
  <main className={styles.home}>
    <ApiProvider>
      <Info />
      <Skills />
      <Description />
      <Team />
      <Footer />
    </ApiProvider>
  </main>
);

export default Home;
