import React from 'react';

import Skill from '../../common/Skill/Skill';

import stylesLanding from './Skills.module.scss';
import stylesFullpage from './SkillsFullpage.module.scss';

import { skills } from '../../../data/data.json';

const SkillsAlt = ({fullpage}) => {
  let styles = !fullpage ? stylesLanding : stylesFullpage;
  return (
    <div className={styles.component} id={!fullpage ? 'skills' : null}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.cardWrapper}>
          {skills.map(skill => (
            <Skill {...skill} key={skill.name}/>
          ))}
        </div>
    </div>
);
}

export default SkillsAlt;
