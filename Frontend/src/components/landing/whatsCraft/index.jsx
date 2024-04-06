import styles from "./WhatsCraft.module.css";
export function WhatsCraft() {
  return (
      <div className={`${styles.main_container} md:py-20 pt-12 pb-5`}>
      <div className={`${styles.color_txt_container} md:grid md:gap-4 items-center md:grid-cols-2 md:flex-col gap-16`}>
        <div className={`${styles.imgs} flex-col flex flex-wrap items-center justify-start gap-4`}>
          <div className={`${styles.two_imgs} gap-4 flex flex-row max-w-full`}>
            <div className={`${styles.Carpenter_div} w-full max-w-md`}>
              <img className={`${styles.animated_img} opacity-0 max-w-full`}src="CarpenterImg.png" />
            </div>    

            <div className={`${styles.HairCut_div} w-full max-w-md`}>
              <img className={`${styles.animated_img} max-w-full opacity-0`} src="HairCutImg.png" />
            </div>
          </div>
          <div className={`${styles.Bag_img} w-full max-w-[25.8rem]`}>
            <img className={`${styles.animated_img} opacity-0 max-w-full`} src="/BagImg.png" />
          </div>
        </div>
        <div className={`${styles.whats_right} flex items-center justify-center md:mt-0 mt-10 `}>
          <div className={styles.title}>
            <h2 className={`${styles.h2} text-4xl font-bold mb-7 text-left max-h-full opacity-0`}>
              What is <span className={`${styles.craft_color} text-[#0f6c96]`}>CraftConnect</span>?
            </h2>
            <div className={styles.para_div}>
            <p className={`${styles.para} text-sm leading-6 md:pb-5 opacity-0 pb-1`}>
              CraftConnect is your go-to platform for seamlessly connecting with
              skilled professionals for your home improvement needs.
            </p>
            <p className={`${styles.para} text-sm leading-6 md:pb-5 opacity-0 pb-1`}>
              Say goodbye to the hassle of endless searches and stressful
              negotiations.
            </p>
            <p className={`${styles.para} text-sm leading-6 md:pb-5 opacity-0 pb-1`}>
              With CraftConnect, you are just a few clicks away from finding the
              right craftsmen for your project.
            </p>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default WhatsCraft;