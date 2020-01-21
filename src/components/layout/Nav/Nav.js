import React from 'react';

import { nav } from '../../../data/data.json';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.component}>
    <div className={styles.logo}>Logo</div>
    <ul id='nav' className={styles.menu}>
      {nav.map(link => (
        <li className={styles.listItem}>
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
