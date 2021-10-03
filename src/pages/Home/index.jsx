/* eslint-disable no-console */
import React, { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import Spinner from '../../components/Spinner';

import './index.scss';

const images = [ 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?cs=srgb&dl=pexels-antonio-batini%C4%87-4164418.jpg&fm=jpg', 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?cs=srgb&dl=pexels-marc-mueller-325111.jpg&fm=jpg', 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' ];

const HomePage = () => {
  useEffect(() => {
    console.log('Voy a ejecutarme una vez');

    console.log('Primero');
  }, []);

  useEffect(() => {
    console.log('Voy a ejecutarme a cada render');

    console.log('segundo');
  });

  useEffect(() => {

  }, []);

  return (
    <div id="home-page">
      <section className="slider-wrapper">
        <Slider images={images} />
      </section>
    </div>
  );
};

export default HomePage;
