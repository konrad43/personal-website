import React from 'react';

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
    let showProjects;

    this.state.projects === 'all'
      ? (showProjects = projects)
      : (showProjects = projects.filter(
          project => project.category === this.state.projects
        ));

    return (
      <div className={styles.component}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.buttons}>
          {buttons.map(btn => (
            <Button
              onClick={() => this.handleClick(btn)}
              variant={
                'secondary' + (this.state.projects === btn ? ' active' : '')
              }
            >
              {btn.toUpperCase()}
            </Button>
          ))}
        </div>
        <div className={styles.cardWrapper}>
          {showProjects.map(project => (
            <Project {...project} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
