import React from 'react';

import Button from '../../common/Button/Button';

import styles from './TopFullpage.module.scss';

const TopFullpage = ({clicked}) => (
  <section className="section">
    <div className={styles.component}>
      <h1 className={styles.title}>Hi I'm Konrad</h1>
      <h3 className={styles.subtitle}>Front-end Developer</h3>
      <Button variant='hero' onClick={clicked}>Let's begin</Button>
    </div>
  </section>
);

export default TopFullpage;
