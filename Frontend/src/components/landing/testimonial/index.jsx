import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    text: "“CraftConnect artisan  fixed my leaky roof top. Totally recommend this platform”",
    rating: 4
  },
  {
    id: 3,
    author: "Adaku",
    image: "/assets/testy3.png",
    text: "“Got a professional plumber to fix an age-long issue with my WC. Smooth!! I totally recommend”",
    rating: 3
  }
];

const Testimonials = () => {
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

  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} p-2 cursor-pointer bg-[#0f6c96] flex items-center justify-center rounded-full text-white hover:text-[#1E1E1E] absolute top-1/2 right-0 -mr-8`} onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${styles.arrow} p-2 cursor-pointer bg-[#0f6c96] flex items-center justify-center rounded-full text-white hover:text-[#1E1E1E] absolute top-1/2 left-0 -ml-8`} onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };

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
        breakpoint: 848,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.testimonials}>
      <Slider {...settings}>
        {testimonialData.map((testyData) => (
          <div key={testyData.id} className={`${styles.card} outline-none mb-10`}>
            <div className={`${styles.cardItem} flex flex-col gap-4 max-w-96 px-5 max-h-full hover:scale-90 py-14 rounded-xl items-center justify-center shadow-[0_4px_8px_0px_rgba(26,26,26,0.43)] m-2.5 cursor-pointer text-center bg-white`}>
              <div className="w-[100px]">
                <img src={testyData.image} alt="image" className="w-full" />
              </div>
              <div className={`${styles.text} line-clamp-8`}>
                <p className={`${styles.author} mb-5 font-medium text-[#0f6c96] text-2xl`}>{testyData.author}</p>
                <p className={`${styles.texttsty} line-clamp-3`}>{testyData.text}</p>
                <div className={`${styles.ratings} text-[#0f6c96] flex flex-row items-center justify-center pt-2 pb-5`}>
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
