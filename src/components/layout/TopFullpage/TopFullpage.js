import React from 'react';

import styles from './TopFullpage.module.scss';

function TopFullpage() {
  return (
    <section className="section">
      <div className={styles.component}>
        <h1 className={styles.title}>Hi I'm Konrad</h1>
        <h3 className={styles.subtitle}>Front-end Developer</h3>
      </div>
    </section>
  );
}

export default TopFullpage;
