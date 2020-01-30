import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '../../common/Icon/Icon';

import styles from './NavMobile.module.scss';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function NavMobile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const items = [
    'Top',
    'About',
    'Skills',
    'Portfolio',
    'Education',
    'Experience',
    'Contact',
  ];

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {items.map((text, index) => (
          <ListItem
            button
            key={text}
            component='a'
            href={`#${text.toLowerCase()}`}
            data-menuanchor={text.toLowerCase()}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div id='nav' className={styles.component}>
      <Button onClick={toggleDrawer('left', true)}>
        <div className={styles.icon}>

        <Icon name='fas fa-bars' />
        </div>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
