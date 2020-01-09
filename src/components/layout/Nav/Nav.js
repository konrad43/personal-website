import React from 'react';

import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.component}>
    <div className={styles.logo}>Logo</div>
    <ul id='nav' className={styles.menu}>
      <li className={styles.listItem} data-menuanchor='firstPage'>
        <a href='#firstPage'>First section</a>
      </li>
      <li className={styles.listItem} data-menuanchor='secondPage'>
        <a href='#secondPage'>Second section</a>
      </li>
      <li className={styles.listItem} data-menuanchor='thirdPage'>
        <a href='#thirdPage'>Third section</a>
      </li>
      <li className={styles.listItem} data-menuanchor='fourthPage'>
        <a href='#fourthPage'>Fourth section</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
