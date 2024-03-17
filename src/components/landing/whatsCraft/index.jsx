import React from "react";
import styles from "./WhatsCraft.module.css";
export function WhatsCraft() {
  return (
    <div className={styles.main_container}>
      <div className={styles.color_txt_container}>
        <div className={styles.imgs}>
          <div className={styles.two_imgs}>
            <div className={styles.Carpenter_div}>
              <img className={styles.animated_img} src="CarpenterImg.png" />
            </div>    

            <div className={styles.HairCut_div}>
              <img className={styles.animated_img} src="HairCutImg.png" />
            </div>
          </div>
          <div className={styles.Bag_img}>
            <img className={styles.animated_img} src="/BagImg.png" />
          </div>
        </div>
        <div className={styles.whats_right}>
          <div className={styles.title}>
            <h2 className={styles.h2}>
              What is <span className={styles.craft_color}>CraftConnect</span>?
            </h2>
          </div>
          <div className={styles.para_div}>
            <p className={styles.para}>
              CraftConnect is your go-to platform for seamlessly connecting with
              skilled professionals for your home improvement needs.
            </p>
            <p className={styles.para}>
              Say goodbye to the hassle of endless searches and stressful
              negotiations.
            </p>
            <p className={styles.para}>
              With CraftConnect, you are just a few clicks away from finding the
              right craftsmen for your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatsCraft;
