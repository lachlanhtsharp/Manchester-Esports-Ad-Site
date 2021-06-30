import React from 'react'

import '../stylesheets/Footer.css';

import TwitterLink from '../assets/Footer-Assets/Twitter-Icon.png';
import TwitterLinkBlue from '../assets/Footer-Assets/Twitter-Icon-Blue.png';
import TwitchLink from '../assets/Footer-Assets/Twitch-Icon.png';
import TwitchLinkPurple from '../assets/Footer-Assets/Twitch-Icon-Purple.png';
import YouTubeLink from '../assets/Footer-Assets/Youtube-Icon.png';
import YouTubeLinkRed from '../assets/Footer-Assets/YouTube-Icon-Red.png';

const Footer = () => {

    const ContactUsToggle = () => {
        const ContactUs = document.querySelector('.ContactUs-Popup-Container');
        const ContactUs2 = document.querySelector('.ContactUs-Inner-Container');
        ContactUs.classList.toggle('active');
        ContactUs2.classList.toggle('active');
    }

    return (
        <div id='Footer-Container' className='Footer-Container'>
            <div className='Footer-Segment-App-Links'>
                <div className='App-Link'>
                    <a href='https://twitter.com/MU_esport' target='_blank' rel='noreferrer' className='App-Link-Anchor'>
                        <img src={TwitterLinkBlue} className='Twitter-Link-Bottom' alt='Twitter'></img>
                        <img src={TwitterLink} className='Twitter-Link' alt='Twitter'></img>
                    </a>
                </div>
                <div className='App-Link'>
                    <a href='https://www.twitch.tv/manchesteruniversity' target='_blank' rel='noreferrer' className='App-Link-Anchor'>
                        <img src={TwitchLinkPurple} className='Twitch-Link-Bottom' alt='Twitch'></img>
                        <img src={TwitchLink} className='Twitch-Link' alt='Twitch'></img>
                    </a>
                </div>
                <div className='App-Link'>
                    <a href='https://www.youtube.com/channel/UChbYeE0RlGcLugTz6kh2JMQ/featured' target='_blank' rel='noreferrer' className='App-Link-Anchor'>
                        <img src={YouTubeLinkRed} className='YouTube-Link-Bottom' alt='YouTube'></img>
                        <img src={YouTubeLink} className='YouTube-Link' alt='Youtube'></img>
                    </a>
                </div>
            </div>
            <div className='Footer-Segment'>
                <a href='https://www.manchester.edu/admissions/audiences/admissions?gclid=EAIaIQobChMImMPc5Ze98QIVImpvBB2yKw6rEAAYASAAEgI-g_D_BwE' target='_blank' className='Footer-Link'>
                    Manchester University
                </a>
            </div>
            <div className='Footer-Segment' onClick={() => ContactUsToggle()}>
                <div className='Contact-Link' >
                    Contact Us
                </div>
            </div>
        </div>
    )
}

export default Footer
