import React from 'react';

import { nav } from '../../../data/data.json';
import styles from './Nav.module.scss';

const handleClick = link => {
  document.getElementById(link).scrollIntoView({behavior: "smooth"})
};

const Nav = () => (
  <nav className={styles.component}>
    <div className={styles.logo}>Logo</div>
    <ul id='nav' className={styles.menu}>
      {nav.map(link => (
        <li key={link} className={styles.listItem}>
          <p onClick={() => handleClick(link.toLowerCase())} className={styles.link}>{link}</p>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
