import React from 'react';

import NavItems from '../../common/NavItems/NavItems';

import styles from './NavFullpage.module.scss';

const Nav = ({state}) => {
  const {destination} = state;
  const sections = ['experience', 'skills', 'contact', 'footer'];
  const darkBg = sections.includes(typeof destination !== 'undefined' ? destination.anchor : null);
  console.log('TCL: Nav -> darkBg', darkBg);

  return (
    <nav className={styles.component + (darkBg ? ` ${styles.darkBg}` : '')} id='nav'>
      <ul className={styles.menu}>
        <NavItems />
      </ul>
    </nav>
  );
}

export default Nav;
