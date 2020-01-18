import React from 'react';

import Icon from '../Icon/Icon';

import styles from './Skill.module.scss';

const Skill = ({name, icon, color}) => (
  <div className={styles.component}>
    <div className={styles.card} style={{backgroundColor: color}}>
        <Icon name={icon} className={styles.icon}/>
        <h3>{name}</h3>
    </div>
  </div>
);

export default Skill;
