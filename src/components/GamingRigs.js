import React from 'react'

import '../stylesheets/GamingRigs.css';

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
            
        </div>
    )
}

export default GamingRigs
