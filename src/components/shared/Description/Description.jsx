import classNames from 'classnames';
import styles from './_Description.module.scss';
import Title from '../Title';

const LIST__CONFIG = [
  {
    id: '01',
    content:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '02',
    content:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '03',
    content:
      'Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Description = () => (
  <section className={styles.description} id={'description'}>
    <div className={classNames('container', styles.description__container)}>
      <div className={styles.description__column}>
        <Title
          content="General description of the assignment"
          className={styles.description__heading}
        />
        <ul className="description__list">
          {LIST__CONFIG.map((listItem) => {
            const { id, content } = listItem;

            return (
              <li className={styles['description__list-item']} key={id}>
                <span className={styles.description__number}>{id}</span>
                {content}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.description__img} />
    </div>
  </section>
);

export default Description;
