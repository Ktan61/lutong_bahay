import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import itemsData from "/src/data/items.json"
import styles from "../Carousel/Carousel.module.css"
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const navigate = useNavigate();
  const handleImageClick = (route) => {
    if (route.startsWith('/')) {
      navigate(route);
    } else {
      window.open(route, '_blank', 'noopener,noreferrer');
    }
  };

  const bootstrapItems = itemsData.items.bootstrap;

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {bootstrapItems.map((item) => (
          <div key={item.id} className={styles.innerContainer}>
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className={styles.image}
              onClick={() => handleImageClick(item.docs)}
            />
            <div className={styles.textBox}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}