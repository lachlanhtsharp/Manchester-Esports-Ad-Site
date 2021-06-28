import React from 'react'

import '../stylesheets/GamingRigs.css';

import Desktop from '../assets/TridentPC.png';

const GamingRigs = () => {

    const collapseNavbar = () => {
        const navbar = document.querySelector('.Navlinks-Container');
        if (navbar.classList[1] === 'active') {
          navbar.classList.toggle('active');
        } else {
          console.log('Closed');
        }
      }

    return (
        <div id='GamingRigs-Container' className='GamingRigs-Container' onClick={() => collapseNavbar()}>
          <a href='https://us.msi.com/Desktop/MPG-Trident-AS-10X/Specification' target='_blank' className='Desktop-Link'>
            <img src={Desktop} alt='Desktop PC' className='Desktop-Image' />
          </a>
        </div>
    )
}

export default GamingRigs
