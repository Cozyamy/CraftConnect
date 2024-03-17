// import React from 'react';
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './testy.module.css';

const testimonialData = [
  {
    id: 1,
    author: "Pelumi",
    image: "/assets/testy1.png",
    text: "“I love this app! Got a professional plumber to fix an age-long issue with my WC. Smooth!! I totally recommend”",
    rating: 5
  },
  {
    id: 2,
    author: "Jerry",
    image: "/assets/testy2.png",
    text: "“CraftConnect has been a life saver. I was able to get a plumber when my house flooded. Thank God that we were able to stop the leak on time”",
    rating: 4
  },
  {
    id: 3,
    author: "Adaku",
    image: "/assets/testy3.png",
    text: "“I love this app! Got a professional plumber to fix an age-long issue with my WC. Smooth!! I totally recommend”",
    rating: 3
  }
];

const NextArrow = ({ onClick }) => {
  return (
    <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const renderRatingStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} style={{ color: '#FFCC13' }} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" style={{ color: '#FFCC13' }} />);
  }

  const remainingStars = 5 - stars.length;

  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FaStar key={`empty-${i}`} style={{ color: '#FFCC13', opacity: 0.3 }} />);
  }

  return stars;
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.testimonials}>
      <Slider {...settings}>
        {testimonialData.map((testyData) => (
          <div key={testyData.id} className={styles.card}>
            <div className={styles.cardItem}>
              <div className={styles.images}>
                <img src={testyData.image} alt="image" className={styles.img} />
              </div>
              <div className={styles.text}>
                <p className={styles.author}>{testyData.author}</p>
                <p>{testyData.text}</p>
                <div className={styles.ratings}>
                  {renderRatingStars(testyData.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
