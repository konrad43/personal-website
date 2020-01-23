import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.component}>
    <div className={styles.wrapper}>
      <p className={styles.text}>&copy; Copyright Bonder Design</p>
    </div>
  </div>
);

export default Footer;
