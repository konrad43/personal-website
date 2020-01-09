import React from 'react';

import styles from './Hero.module.scss';

const Hero = ({ text }) => (
  <div className='section'>
    <div className={styles.bg}>
      {/* <Nav /> */}
      <div className={styles.glitch} data-text={text}>
        {text}
      </div>
    </div>
  </div>
);

export default Hero;
