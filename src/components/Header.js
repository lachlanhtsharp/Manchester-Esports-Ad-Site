import React from 'react';
import "../stylesheets/Header.css";
import Logo from '../assets/MU_Logo.png';

const Header = () => {

    const Navlinks = document.querySelector('.Navlinks-Container');
    const ContactUs = document.querySelector('.ContactUs-Popup-Container');
    const ContactUs2 = document.querySelector('.ContactUs-Inner-Container');

    const NavLinksToggle = () => {
        const Navlinks = document.querySelector('.Navlinks-Container');
        Navlinks.classList.toggle('active');
    }

    const ContactUsToggle = () => {
        const ContactUs = document.querySelector('.ContactUs-Popup-Container');
        const ContactUs2 = document.querySelector('.ContactUs-Inner-Container');
        ContactUs.classList.toggle('active');
        ContactUs2.classList.toggle('active');
    }

    

    return (
        <div className='Header'>
            <div className='Header-Container'>
                <div className='Header-Spacer'>
                    <div className='Menu-Button-Container' onClick={() => NavLinksToggle()}>
                        <div className='Menu-Button'></div>
                        <div className='Menu-Button'></div>
                        <div className='Menu-Button'></div>
                    </div>
                </div>
                <div className='Header-Logo'>
                    <a href='#Home-Container' className='Logo-Link'>
                        <img className='Logo' alt='Manchester-Logo' src={Logo}></img>
                    </a>
                </div>
                <div className='Header-Spacer'></div>
            </div>
            <div className='Navlinks-Container'>
                <div className='NavLinks'>
                    <a href='#Home-Container' classname='Navlink'>Home</a>
                </div>
                <div className='NavLinks'>
                    <a href='#Arena-Container' classname='Navlink'>The Arena</a>
                </div>
                <div className='NavLinks'>
                    <a href='#GamingRigs-Container' classname='Navlink'>Gaming Rigs</a>
                </div>
                <div className='NavLinks'>
                    <a href='#Footer-Container' classname='Navlink'>Scholarships</a>
                </div>
                <div className='NavLinks'>
                    <div className='ContactUs' onClick={() => ContactUsToggle()}>Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Header;
