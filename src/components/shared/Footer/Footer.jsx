import classNames from 'classnames';
import styles from './_Footer.module.scss';
import Header from '../Header';

const LINK_CONFIG = [
  { id: 0, content: 'Testing skills', href: '#skills' },
  {
    id: 1,
    content: 'General description of the assignment',
    href: '#description',
  },
  { id: 2, content: 'Our team', href: '#team' },
  { id: 3, content: 'About us', href: '#' },
  { id: 4, content: 'Carrier', href: '#' },
  { id: 5, content: 'Blog', href: '#' },
];

const Footer = () => (
  <footer className={styles.footer}>
    <Header />
    <div className={classNames('container', styles.footer__container)}>
      <div className={styles.footer__wrapper}>
        {LINK_CONFIG.map((link) => {
          const { id, content, href } = link;

          if (id <= 2) {
            return (
              <a href={href} className={styles.footer__link} key={id}>
                {content}
              </a>
            );
          }

          return null;
        })}
      </div>
      <div className={styles.footer__wrapper}>
        {LINK_CONFIG.map((link) => {
          const { id, content, href } = link;

          if (id >= 3) {
            return (
              <a href={href} className={styles.footer__link} key={id}>
                {content}
              </a>
            );
          }

          return null;
        })}
      </div>
      <div className="footer__wrapper">
        <address className={styles.footer__rights}>&copy; Copyright</address>
      </div>
    </div>
  </footer>
);

export default Footer;
