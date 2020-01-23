import React from 'react';

import Button from '../../common/Button/Button';

import styles from './HeroAlt.module.scss';

const Hero = () => (
  <header className={styles.component}>
    <div className={styles.bg}></div>
    <div className={styles.overlay}></div>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>I'm Konrad Bonder</h1>
      <h3 className={styles.subtitle}>Front-end Developer</h3>
      <Button variant='hero'>Download Resume</Button>
    </div>
  </header>
);

export default Hero;
