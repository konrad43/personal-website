import React from 'react';
import { Transition } from 'react-transition-group';

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
          <img className={styles.image} src={image} alt='' />
          <div className={styles.cardBody}>
            {/* <h3 className={styles.title}>{name}</h3> */}
            <h3 className={styles.title}>{state}</h3>
          </div>
        </div>
      </div>
    )}
  </Transition>
);

export default Project;
