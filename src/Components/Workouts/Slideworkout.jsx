import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainWorkout1 from './Workout1/MainWorkout1';
import MainWorkout2 from './Workout2/MainWorkout2';
import MainWorkout3 from './Workout3/Mainworkout3';
import MainWorkout4 from './Workout4/Mainworkout4';
import MainWorkout5 from './Workout5/Mainworkout5';
import MainWorkout6 from './Workout6/Mainworkout6';
import MainWorkout7 from './workout7/Mainworkout7';
import MainWorkout8 from './workout8/Mainworkout8';
import MainWorkout9 from './workout9/Mainworkout9';
import MainWorkout10 from './Workout10/Mainworkout10';

function Slideworkout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4 pb-7">
      <Slider {...settings} >
        <MainWorkout1 />
        <MainWorkout2 />
        <MainWorkout3 />
        <MainWorkout4 />
        <MainWorkout5 />
        <MainWorkout6 />
        <MainWorkout7 />
        <MainWorkout8 />
        <MainWorkout9 />
        <MainWorkout10 />
      </Slider>
    </div>
  );
}

export default Slideworkout;
