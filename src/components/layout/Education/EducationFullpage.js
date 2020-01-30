import React from 'react';

import CvItem from '../../common/CvItem/CvItem';

import { education } from '../../../data/data.json';
import styles from './EducationFullpage.module.scss';

const titleStyle = {color: '#000'};

const Education = ({ fullpage, data, title }) => (
  <div className={styles.component}>
    <div className={styles.titleWrapper}>
      <h2 className={styles.title} style={title === 'Experience' ? titleStyle : null}>{title}</h2>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.education}>
        {data.map(item => (
          <CvItem key={item.date} item={item} fullpage dark={title === 'Experience'}/>
        ))}
      </div>
    </div>
  </div>
);

// const Education = ({ fullpage, data, title }) => (
//   <div className={styles.component}>
//     <div className={styles.titleWrapper}>
//       <h2 className={styles.title}>{title}</h2>
//     </div>
//     <div className={styles.wrapper}>
//       <div className={styles.education}>
//         {data.map(item => (
//           <CvItem key={item.id} item={item} fullpage />
//         ))}
//       </div>
//     </div>
//   </div>
// );

export default Education;
