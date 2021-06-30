import React from 'react'
import '../stylesheets/Home.css';
import Iframe from 'react-iframe';

const Home = () => {

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
        <div id='Home-Container' className='Home-Container' onClick={() => {
          collapseNavbar();
          collapseContactUs();
          }}>
            <Iframe url="http://www.youtube.com/embed/QAZcibV7xnA"
             className='Esports-Video'
             display="initial"
             allow='fullscreen' />
        </div>
    )
}

export default Home
