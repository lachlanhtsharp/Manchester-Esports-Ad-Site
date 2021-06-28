import React, { useState } from 'react'
import { CarouselData } from './ArenaCarouselData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import '../stylesheets/Arena.css';

const Arena = () => {
  const [current, setCurrent] = useState(0);
  const length = CarouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0: current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }


    const collapseNavbar = () => {
        const navbar = document.querySelector('.Navlinks-Container');
        if (navbar.classList[1] === 'active') {
          navbar.classList.toggle('active');
        } else {
          console.log('Closed');
        }
      }

    return (
        <div id='Arena-Container' className='Arena-Container' onClick={() => collapseNavbar()}>
            {
                CarouselData.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'} >
                            {index === current && (
                              <div className='Carousel-Container'>
                                <div className='Image-Details-Container'>
                                  <div className='Image-Title'>
                                    {slide.title}
                                  </div>
                                  <div className='Image-Details'>
                                    {slide.details}
                                  </div>
                                </div>
                                <div className='Left-Arrow-Container' onClick={prevSlide}>
                                  <FaArrowAltCircleLeft className='Left-Arrow' />
                                </div>
                                <img src={slide.image} className='Esports-Arena-Image' alt='Esports Arena' />
                                <div className='Right-Arrow-Container' onClick={prevSlide}>
                                  <FaArrowAltCircleRight className='Right-Arrow' />
                                </div>
                              </div>
                            )}    
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Arena
