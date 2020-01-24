import React from 'react';

import styles from './NavFullpage.module.scss';

const Nav = ({state}) => (
  <nav className={styles.component} id='nav'>
    {console.log(state)}
    <ul className={styles.menu}>
      {['Top', 'About', 'Skills', 'Portfolio', 'Education'].map(item => (
        <li key={item} className={styles.listItem} data-menuanchor={item.toLowerCase()}>
          <a href={`#${item.toLowerCase()}`} className={styles.link}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
