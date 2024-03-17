// import React, { useState } from 'react';
// import Carousel from "react-elastic-carousel"
// import styles from './testy.module.css';

// const testimonialData = [
//   {
//     id: 1,
//     author: "Pelumi",
//     image: "/assets/testy1.png",
//     text: "“I love this app! Got a professional plumber to fix an age-long issue with my WC. Smooth!! I totally recommend”",
//     rating: 5
//   },
//   {
//     id: 2,
//     author: "Jerry",
//     image: "/assets/testy2.png",
//     text: "“CraftConnect has been a life saver. I was able to get a plumber when my house flooded. Thank God that we were able to stop the leak on time”",
//     rating: 4
//   },
//   {
//     id: 3,
//     author: "Adaku",
//     image: "/assets/testy3.png",
//     text: "“I love this app! Got a professional plumber to fix an age-long issue with my WC. Smooth!! I totally recommend”",
//     rating: 3
//   },
//   {
//     id: 4,
//     author: "Adaku",
//     image: "/assets/testy3.png",
//     text: "“I love this app! Got a professional plumber to fix an age-long issue with my WC. Smooth!! I totally recommend”",
//     rating: 3
//   }
// ];

// const Testimonials = () => {
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
//   };

//   return (
//     <div className={styles.testimonials}>
//       <button className={styles.arrow} onClick={prevTestimonial}>&lt;</button>
//       {testimonialData.map((testimonial, index) => (
//         <div key={testimonial.id} className={`${styles.testimonial} ${index === currentTestimonialIndex ? styles.active : ''}`}>
//           <div className={styles.testimonialContent}>
//             <img src={testimonial.image} alt={testimonial.author} className={styles.image} />
//             <p className={styles.author}> {testimonial.author}</p>
//             <p>{testimonial.text}</p>
//             <div className={styles.rating}>
//               {[...Array(testimonial.rating)].map((_, i) => (
//                 <span key={i} className={styles.star}></span>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//       <button className={styles.arrow} onClick={nextTestimonial}>&gt;</button>
//     </div>
//   );
// };

// export default Testimonials;
