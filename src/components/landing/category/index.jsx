// import React from 'react';
import styles from './category.module.css';

export function Category () {
  return (
    <div>
      <div className={styles.category_box}>
        <div className={styles.box_header}>
          <div className={styles.title}>  
            <h2>Browse <span>artisan</span> by category</h2>
            <p>Browse our curated categories to find skilled artisans ready to bring your vision to life. Whether you are looking for a carpenter, painter, electrician, or more, we have the perfect match for your project.
            </p>
          </div>
          <div className={styles.boxes}>
            <div className={styles.catBox}>
              <img src="./assets/Hammer.png" alt="hammer" />
            </div>
            <div className={styles.catBox}>
              <img src="./assets/Brush.png" alt="brush" />
            </div>
            <div className={styles.catBox}>
              <img src="./assets/Sewing.png" alt="Sewing" />
            </div>
            <div className={styles.catBox}>
              <img src="./assets/Car_service.png" alt="Car_service" />
            </div>
            <div className={styles.catBox}>
              <img src="./assets/Plumber.png" alt="Plumber" />
            </div>        
          </div>
          <div  className={styles.see_more}>
          <a href="">
            See more
          </a>
          <img src="./assets/Right Arrow.png" alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}
