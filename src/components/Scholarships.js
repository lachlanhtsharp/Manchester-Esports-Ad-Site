import React from 'react'

import '../stylesheets/Scholarships.css';

import JerseyFront from '../assets/Jersey1.png';
import JerseyBack from '../assets/Jersey2.png';

const Scholarships = () => {

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
    <div id='Scholarships-Container' className='Scholarships-Container' onClick={() => {
      collapseNavbar();
      collapseContactUs();
    }}>
      <div className='Scholarships-Inner-Container'>
        <div className='Scholarship-Information'>
          <p className='Scholarship-Paragraph'>
          Gain $1,000 in scholarships annually for being enrolled in the Esports Program.
          </p> 
          <p className='Scholarship-Paragraph'>
          Up to $3,000 in scholarships may be accrued dependent on eligibility. Contact us for more details.
          </p>
        </div>
        <div className='Scholarship-Jersey-Pictures'>
          <img src={JerseyBack} className='Jersey' alt='Jersey' />
          <img src={JerseyFront} className='Jersey-Front' alt='Jersey' />
        </div>
      </div>
    </div>
  )
}

export default Scholarships
