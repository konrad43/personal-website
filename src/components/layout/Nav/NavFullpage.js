import React from 'react';

import styles from './NavFullpage.module.scss';

const Nav = ({state}) => {
  const {destination} = state;
  const sections = ['experience', 'skills'];
  const darkBg = sections.includes(typeof destination !== 'undefined' ? destination.anchor : null);
  console.log('TCL: Nav -> darkBg', darkBg);

  return (
    <nav className={styles.component + (darkBg ? ` ${styles.darkBg}` : '')} id='nav'>
      <ul className={styles.menu}>
        {['Top', 'About', 'Skills', 'Portfolio', 'Education', 'Experience'].map(item => (
          <li key={item} className={styles.listItem} data-menuanchor={item.toLowerCase()}>
            <a href={`#${item.toLowerCase()}`} className={styles.link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
