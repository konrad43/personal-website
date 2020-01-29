import React from 'react';

import ContactItem from '../../common/ContactItem/ContactItem';

import { contact, contactLink } from '../../../data/data.json';
import styles from './ContactFullpage.module.scss';
{/* <img src={contactLink} alt='' className={styles.image} /> */}

const Contact = () => (
  <div className={styles.component}>
    <div className={styles.imageWrapper}>
    </div>
    <div className={styles.contactWrapper}>
      <h2 className={styles.title}>Keep in touch</h2>
      <div className={styles.wrapper}>
        {contact.map(itemProps => (
          <ContactItem {...itemProps} key={itemProps.name} />
        ))}
      </div>
    </div>
  </div>
);

export default Contact;
