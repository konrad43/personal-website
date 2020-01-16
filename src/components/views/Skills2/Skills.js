import React from 'react';

import Skill from '../../common/Skill/Skill';

import styles from './Skills.module.scss';
import { skills } from '../../../data/data.json';

const SkillsAlt = () => (
  <div className='section'>
    <div className={styles.component}>
      <div className={styles.left}>
        <h2 className={styles.titleDark}>Soft Skills</h2>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.cardWrapper}>
          {skills.map(skill => (
            <Skill {...skill} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SkillsAlt;
