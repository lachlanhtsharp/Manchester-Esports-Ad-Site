import React from 'react'

import '../stylesheets/Arena.css';

const Arena = () => {

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
            
        </div>
    )
}

export default Arena
