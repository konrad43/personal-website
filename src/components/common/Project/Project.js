import React from 'react';
import { Transition } from 'react-transition-group';

import Button from '../Button/Button';

import styles from './Project.module.scss';

const duration = 300;
const defaulStyle = {
  transition: `all ${duration}ms`,
  opacity: 0,
  // position: 'relative'
};

const transitionStyles = {
  // entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  // exited: { opacity: 0 },
  // exited: { width: 0},
};
const Project = ({ name, image, link, category, desc, show }) => (
  <Transition
    in={!!(show === 'all' || show === category)}
    timeout={duration}
    mountOnEnter
    unmountOnExit
    // onExited={}
  >
    {state => (
      <div
        style={{
          ...defaulStyle,
          ...transitionStyles[state],
        }}
      >
        <div className={styles.card}>
          <div className={styles.overlay}></div>
          <img className={styles.image} src={image} alt='' />
          <div className={styles.cardBody}>
            {/* <h3 className={styles.title}>{name}</h3> */}
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.button}>
              <Button className={styles.button} variant='hero'>
                <a className={styles.link} href={link}>
                  See live
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )}
  </Transition>
);

export default Project;
