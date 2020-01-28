import React from 'react';

import CvItem from '../../common/CvItem/CvItem';

import { education, experience } from '../../../data/data.json';
import stylesLanding from './Education.module.scss';
import stylesFullpage from './EducationFullpage.module.scss';

const Education = ({fullpage}) => {
  const styles = fullpage ? stylesFullpage : stylesLanding;
  return (
    <div className={styles.component} id={!fullpage ? 'portfolio' : null}>
      <h2 className={styles.title}>Education &amp; Experience</h2>
      <div className={styles.wrapper}>
        <div className={styles.education}>
          {education.map(item => (
            <CvItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.education}>
          {experience.map(item => (
            <CvItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;