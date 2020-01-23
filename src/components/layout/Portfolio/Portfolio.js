import React from 'react';
import {TransitionGroup} from 'react-transition-group';

import Project from '../../common/Project/Project';
import Button from '../../common/Button/Button';

import styles from './Portfolio.module.scss';
import { projects } from '../../../data/data.json';

class Portfolio extends React.Component {
  state = {
    projects: 'all',
  };

  handleClick = category => {
    this.setState({
      projects: category,
    });
  };

  render() {
    const buttons = ['all', 'website', 'e-commerce', 'app'];

    return (
      <div className={styles.component} id='portfolio'>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.buttons}>
          {buttons.map(btn => (
            <Button
              onClick={() => this.handleClick(btn)}
              variant={
                'secondary' + (this.state.projects === btn ? ' active' : '')
              }
              key={btn}
            >
              {btn.toUpperCase()}
            </Button>
          ))}
        </div>
        <TransitionGroup className={styles.cardWrapper}>
          {projects.map(project => (
            <Project key={project.name} {...project} show={this.state.projects} />
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default Portfolio;
