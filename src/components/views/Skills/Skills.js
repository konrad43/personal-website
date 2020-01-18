import React from 'react';

import Skill from '../../common/Skill/Skill';

import styles from './Skills.module.scss';
import { skills } from '../../../data/data.json';

const SkillsAlt = () => (
    <div className={styles.component}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.cardWrapper}>
          {skills.map(skill => (
            <Skill {...skill} />
          ))}
        </div>
    </div>
);

export default SkillsAlt;
