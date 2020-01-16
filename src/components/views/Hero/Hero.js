import React from 'react';

import Button from '../../common/Button/Button';

import styles from './Hero.module.scss';

const Hero = ({ text, clicked }) => (
  <div className='section'>
    <div className={styles.bg}>
      <div className={styles.glitch} data-text={text}>
        {text}
      </div>
      <Button variant='hero bg' onClick={clicked}>Begin the journey</Button>
    </div>
  </div>
);

export default Hero;
