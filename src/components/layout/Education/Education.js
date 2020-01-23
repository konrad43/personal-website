import React from 'react';

import CvItem from '../../common/CvItem/CvItem';

import { education, experience } from '../../../data/data.json';
import styles from './Education.module.scss';

const Education = () => (
  <div className={styles.component} id='education'>
    <h2 className={styles.title}>Education &amp; Experience</h2>
    <div className={styles.wrapper}>
      <div className={styles.education}>
        {education.map(item => (
          <CvItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.education}>
        {experience.map(item => (
          <CvItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default Education;