import React from 'react';
import s from './PrivateContact.module.scss'
import {Link} from "react-router-dom";
import contactHand from '../assets/images/contact-hand.png'
import telegram from '../assets/images/social-media/telegram.png'
import instagram from '../assets/images/social-media/instagram.png'
import git from '../assets/images/social-media/github.png'
import linkedin from '../assets/images/social-media/linkedin.png'

const PrivateContact = () => {
    return (

        <ul className={s.list}>
            <li className={s.listImg}><img src={contactHand} alt="contact"/></li>
            <li className={s.title}>Likhachev Dmitrii</li>
            <li className={s.subtitle}>Fronted Developer</li>
            <li className={s.desc}>I am available for remote work. Connect with me via and call in to my account.</li>
            <li className={s.phone}>Phone: <span className={s.spanHover}>(971) 588 6 9932</span></li>
            <li className={s.email}>Email: <span className={s.spanHover}>lihachevd87@gmail.com</span></li>
            <li>FIND WITH ME</li>
            <ul className={s.social}>
                <Link className={s.social__item} to={'/'}> <img title={'Linkedin'} src={linkedin} alt=""/></Link>
                <Link className={s.social__item} to={'/'}> <img title={'Github'} src={git} alt=""/></Link>
                <Link className={s.social__item} to={'/'}> <img title={'Telegram'} src={telegram} alt=""/></Link>
                <Link className={s.social__item} to={'/'}> <img title={'Instagram'} src={instagram} alt=""/></Link>
            </ul>

        </ul>
    );
};

export default PrivateContact;