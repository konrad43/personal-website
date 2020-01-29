import React from 'react';

import Button from '../Button/Button';

import styles from './Project.module.scss';
import stylesMain from './Project.module.scss';
import stylesGallery from './ProjectGallery.module.scss';

const Project = ({ name, image, link, category, desc, gallery }) => {
  // const styles = !gallery ? stylesMain : stylesGallery;
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.overlay}></div>
        <img className={styles.image} src={image} alt='' />
        <div className={styles.cardBody}>
          {/* <h3 className={styles.title}>{name}</h3> */}
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.text}>{category}</p>
          <div className={styles.button}>
            <Button className={styles.button} variant='hero'>
              <a className={styles.link} href={link}>
                See live
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
