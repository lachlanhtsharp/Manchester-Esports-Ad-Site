import React from 'react'

import '../stylesheets/Scholarships.css';

const Scholarships = () => {

    const collapseNavbar = () => {
        const navbar = document.querySelector('.Navlinks-Container');
        if (navbar.classList[1] === 'active') {
          navbar.classList.toggle('active');
        } else {
          console.log('Closed');
        }
      }

    return (
        <div id='Scholarships-Container' className='Scholarships-Container' onClick={() => collapseNavbar()}>
            
        </div>
    )
}

export default Scholarships
