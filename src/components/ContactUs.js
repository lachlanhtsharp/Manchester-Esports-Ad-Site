import React from 'react'

import '../stylesheets/ContactUs.css'

import Headshot from '../assets/Garrett-Manchester-Headshot.jpg';

const ContactUs = () => {

    const collapseContactUs = () => {
        const ContactUs = document.querySelector('.ContactUs-Popup-Container');
        const ContactUs2 = document.querySelector('.ContactUs-Inner-Container');
        if (ContactUs.classList[1] === 'active') {
          ContactUs.classList.toggle('active');
          ContactUs2.classList.toggle('active');
        } else {
          console.log('Closed');
        }
      }

    return (
        <div className='ContactUs-Popup-Container'>
            <div className='ContactUs-Inner-Container'>
                <div className='ContactUs-Details'>
                    <ul className='Details-List' >
                        <li className='Detail-Name'>Garrett Schieferstein</li>
                        <li className='Detail'>Director of Esports</li>
                        <li className='Detail'>gdschieferstein@manchester.edu</li>
                        <li className='Detail'>260-240-8820</li>
                    </ul>
                </div>
                <div className='ContactUs-Headshot'>
                    <img src={Headshot} className='Headshot' alt='Garrett Schieferstein'></img>
                </div>
                <button onClick={() => {
                    collapseContactUs();
                }} className='ContactUs-Button'>X</button>
            </div>
        </div>
    )
}

export default ContactUs
