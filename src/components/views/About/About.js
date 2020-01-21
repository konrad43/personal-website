import React from 'react';

import { about } from '../../../data/data.json';
import styles from './About.module.scss';

const { image, text, bars } = about;

const About = () => (
  <section className={styles.component}>
    <div className={styles.image}>
      <img src={image} alt='' />
    </div>
    <div className={styles.about}>
      <h2 className={styles.title}>About Me.</h2>
      <h3 className={styles.subtitle}>Front-end Developer</h3>
      <p className={styles.text}>{text}</p>
      {bars.map(bar =>(
        <div className={styles.bar}>
          <div className={styles.barText} style={{width: `${bar.percentage}%`}}>
            <div>{bar.text}</div>
            <div>{bar.percentage}%</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;
