import React from 'react';

import stylesLanding from './CvItem.module.scss';
import stylesFullpage from './CvItemFullpage.module.scss';

const darkStyle = {color: '#000'};

const CvItem = ({item, fullpage, dark}) => {
  const styles = fullpage ? stylesFullpage : stylesLanding;

  return (
    <div className={styles.card + ' ' + (dark ? styles.dark : null)}>
    {!fullpage && <p className={styles.date}>{item.date}</p>}
    <p className={styles.title}>{item.title}</p>
    {fullpage && <p className={styles.date} style={dark ? darkStyle : null}>{item.date}</p>}
    <p className={styles.text}  style={dark ? darkStyle : null}>{item.text}</p>
  </div>
  );
}

export default CvItem;