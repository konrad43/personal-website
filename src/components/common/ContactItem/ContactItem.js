import React from 'react';

import Icon from '../Icon/Icon';

import styles from './ContactItem.module.scss';

const ContactIcon = ({ icon, name, value }) => (
  <div className={styles.component}>
    <div className={styles.icon}>
    <Icon name={icon}/>
    </div>
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.text}>{value}</p>
  </div>
);

export default ContactIcon;
