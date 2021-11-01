import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './_Skills.module.scss';
import Title from '../Title';
import Text from './Text.jsx';

const PARAGRAPH_CONFIG = [
  { id: 0, content: 'Applying HTML, CSS/SASS. Markup implementation.' },
  {
    id: 1,
    content: 'Working with asynchronous code, HTTP and the REST architecture.',
  },
  {
    id: 2,
    content: 'Applying JS. Transforming and organising data. Interactions.\n',
  },
  {
    id: 3,
    content:
      'Using one of the modern front-end frameworks either Vue or React. Vue is preferable but React is also viable.',
  },
];

const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  if (width <= 980) {
    return (
      <section className={styles.skills} id={'skills'}>
        <div className={styles.skills__column}>
          <Title content={'Testing skills'} className={styles.skills__title} />

          {PARAGRAPH_CONFIG.map((paragraph) => {
            const { id, content } = paragraph;

            return (
              <Text
                content={content}
                className={styles.skills__paragraph}
                key={id}
              />
            );
          })}
        </div>
        <div className={styles.skills__round}>
          <div
            className={classNames(
              styles['skills__round-item'],
              styles['skills__round-item--top-left'],
            )}
          >
            HTML, CSS/SASS
          </div>
          <div
            className={classNames(
              styles['skills__round-item'],
              styles['skills__round-item--top-right'],
            )}
          >
            TTP/REST
          </div>
          <div
            className={classNames(
              styles['skills__round-item'],
              styles['skills__round-item--bottom-left'],
            )}
          >
            JS
          </div>
          <div
            className={classNames(
              styles['skills__round-item'],
              styles['skills__round-item--bottom-right'],
            )}
          >
            Vue/React
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.skills}>
      <div className="container">
        <Title content={'Testing skills'} className={styles.skills__title} />
        <div className={styles.skills__item}>
          <Text
            content={'Applying HTML, CSS/SASS. Markup implementation.'}
            className={styles.skills__paragraph}
          />
          <div className={styles.skills__round}>
            <div
              className={classNames(
                styles['skills__round-item'],
                styles['skills__round-item--top-left'],
              )}
            >
              HTML, CSS/SASS
            </div>
            <div
              className={classNames(
                styles['skills__round-item'],
                styles['skills__round-item--top-right'],
              )}
            >
              TTP/REST
            </div>
          </div>
          <Text
            content={
              'Working with asynchronous code, HTTP and the REST architecture.'
            }
            className={styles.skills__paragraph}
          />
        </div>
        <div className={styles.skills__item}>
          <Text
            content={
              'Applying JS. Transforming and organising data. Interactions.'
            }
            className={styles.skills__paragraph}
          />
          <div className={styles.skills__round}>
            <div
              className={classNames(
                styles['skills__round-item'],
                styles['skills__round-item--bottom-left'],
              )}
            >
              JS
            </div>
            <div
              className={classNames(
                styles['skills__round-item'],
                styles['skills__round-item--bottom-right'],
              )}
            >
              Vue/React
            </div>
          </div>
          <Text
            content={
              'Using one of the modern front-end frameworks either Vue or React. Vue is preferable but React is also viable.'
            }
            className={styles.skills__paragraph}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
