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

      const collapseContactUs = () => {
        const ContactUs = document.querySelector('.ContactUs-Popup-Container');
        if (ContactUs.classList[1] === 'active') {
          ContactUs.classList.toggle('active');
        } else {
          console.log('Closed');
        }
      }

    return (
        <div id='GamingRigs-Container' className='GamingRigs-Container' onClick={() => {
          collapseNavbar();
          collapseContactUs();
          }}>
          <a href='https://us.msi.com/Desktop/MPG-Trident-AS-10X/Specification' target='_blank' className='Desktop-Link'>
            <img src={Desktop} alt='Desktop PC' className='Desktop-Image' />
          </a>
          <div className='Desktop-Details-Container'>
            <div className='Desktop-Title'>
                Gaming Rig Specs
            </div>
            <div className='Desktop-Details'>
              <ul className='Desktop-Details'>
                <li className='Desktop-Detail'>
                  <a href='https://us-store.msi.com/index.php?route=product/product&product_id=658' target='_blank' className='Detail-Link'>
                  MPG Trident AS 10TD-1420US Slim Gaming
                  </a>
                </li>
                <li className='Desktop-Detail'><a href='https://ark.intel.com/content/www/us/en/ark/products/199318/intel-core-i7-10700f-processor-16m-cache-up-to-4-80-ghz.html' target='_blank' className='Detail-Link'>Intel® Core™ i7-10700F Processor
                </a> </li>
                <li className='Desktop-Detail'><a href='https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3070-3070ti/' target='_blank' className='Detail-Link'>NVIDIA® GeForce RTX™ 3070 8G GDDR6
                  </a> </li>
                <li className='Desktop-Detail'>
                  <a href='https://www.razer.com/gaming-keyboards/razer-huntsman-tournament-edition/RZ03-03080200-R3U1' target='_blank' className='Detail-Link'>Razer Huntsman Tournament Edition Keyboard
                  </a></li>
                <li className='Desktop-Detail'><a href='https://www.razer.com/gaming/mice/razer-viper-8khz?gclid=EAIaIQobChMIr4OioKW78QIV_GxvBB2PxQQYEAAYASAAEgJRsPD_BwE' target='_blank' className='Detail-Link'>Razer Viper Gaming Mouse
                  </a> </li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default GamingRigs
