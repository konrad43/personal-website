import React from 'react';

import styles from './NavItems.module.scss';

const items = ['Top', 'About', 'Skills', 'Portfolio', 'Education', 'Experience', 'Contact'];

const NavItems = () => (
  <React.Fragment>
            {items.map(item => (
          <li key={item} className={styles.listItem} data-menuanchor={item.toLowerCase()}>
            <a href={`#${item.toLowerCase()}`} className={styles.link}>
              {item}
            </a>
          </li>
        ))}
  </React.Fragment>
);

export default NavItems;