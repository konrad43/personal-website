import React from 'react';
import {TransitionGroup} from 'react-transition-group';

import Project from '../../common/Project/Project';
import Button from '../../common/Button/Button';

import stylesLanding from './Portfolio.module.scss';
import stylesFullpage from './PortfolioFullpage.module.scss';

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
    const { fullpage } = this.props;
    const buttons = ['all', 'website', 'e-commerce', 'app'];
    const styles = fullpage ? stylesFullpage : stylesLanding;

    return (
      <div className={styles.component} id={!fullpage ? 'portfolio' : null}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.buttons}>
          {!fullpage && buttons.map(btn => (
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
