import React from 'react';

import styles from './CvItem.module.scss';

const CvItem = ({item}) => (
  <div className={styles.card}>
  <p className={styles.date}>{item.date}</p>
  <p className={styles.title}>{item.title}</p>
  <p className={styles.text}>{item.text}</p>
</div>
);

export default CvItem;