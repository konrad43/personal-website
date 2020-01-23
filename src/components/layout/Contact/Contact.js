import React from 'react';

import ContactItem from '../../common/ContactItem/ContactItem';

import {contact} from '../../../data/data.json';
import styles from './Contact.module.scss';

const Contact = () => (
  <div className={styles.component} id='contact'>
    <h2 className={styles.title}>Keep in touch</h2>
    <div className={styles.wrapper}>
      {contact.map(itemProps => (
        <ContactItem {...itemProps} key={itemProps.name}/>
      ))}
    </div>
  </div>
);

export default Contact;