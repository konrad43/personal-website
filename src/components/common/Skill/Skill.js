import React from 'react';

import Icon from '../Icon/Icon';

import styles from './Skill.module.scss';

const Skill = ({name, icon}) => (
  <div className={styles.component}>
    <div className={styles.card}>
        <Icon name={icon} className={styles.icon}/>
        <h3>{name}</h3>
    </div>
  </div>
);

export default Skill;
