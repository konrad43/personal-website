import React, {useState} from 'react';

import styles from './Project.module.scss';

const Project = ({ name, image, link, category, desc }) => (
  <div className={styles.component}>
    <div className={styles.card}>
      <img className={styles.image} src={image} alt='' />
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{name}</h3>
      </div>
    </div>
  </div>
);

export default Project;
