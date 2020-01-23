import React from 'react';

import { about } from '../../../data/data.json';
import styles from './About.module.scss';

const { image, text, bars } = about;

const About = () => (
  <section className={styles.component} id='about'>
    <h2 className={styles.sectionTitle}>About</h2>
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={image} alt='' />
      </div>
      <div className={styles.about}>
        <h2 className={styles.title}>About Me.</h2>
        <h3 className={styles.subtitle}>Front-end Developer</h3>
        <p className={styles.text}>{text}</p>
        {bars.map(bar => (
          <div key={bar.text} className={styles.bar}>
            <div
              className={styles.barText}
              style={{
                width: `${bar.percentage}%`,
                backgroundColor: bar.color ? bar.color : '#000',
              }}
            >
              <div>{bar.text}</div>
              <div>{bar.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
