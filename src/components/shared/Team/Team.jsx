import classNames from 'classnames';
import styles from './_Team.module.scss';
import Title from '../Title';

const TEAM__CONFIG = [
  {
    id: 0,
    headingContent: 'Our team',
    textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie
        pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec
        faucibus varius dui. Lorem non sed tincidunt pharetra tempor. Amet proin
        sapien consequat orci, mauris.Lorem ipsu elit.\\amet, porttitor.`,
  },
  {
    id: 1,
    headingContent: 'Our team',
    textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue molestie
        pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec
        faucibus varius dui. Lorem non sed tincidunt pharetra tempor. Amet proin
        sapien consequat orci, mauris.Lorem ipsu elit.\\amet, porttitor.`,
  },
];

const Team = () => (
  <section className={styles.team} id={'team'}>
    <div className={classNames('container', styles.team__container)}>
      {TEAM__CONFIG.map((team) => {
        const { id, headingContent, textContent } = team;

        return (
          <div className={styles.team__wrapper} key={id}>
            <Title content={headingContent} className={styles.team__title} />
            <div
              className={classNames(
                styles.team__img,
                id === 1 ? styles['team__img--second'] : '',
              )}
            />
            <p className={styles.team__text}>{textContent}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Team;
