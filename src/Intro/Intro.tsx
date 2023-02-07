import React from 'react';
import s from './Intro.module.scss'
import reactLogo from '../assets/images/atom.png'
import avatar from '../assets/images/avatar.jpg'
import Line from "../Line/Line";

const Intro = () => {
    return (
        <section className={s.intro}>
            <div className={s.intro__block}>
                <div className={s.about}>
                    <p className={s.about__subtitle}>welcome to my world</p>
                    <h1 className={s.about__title}>Hi,&nbsp;I'm <span>Dmitrii</span> <br/>a Frontend Developer</h1>
                    <p className={s.about__desc}> I want to upgrade my skills.My dream is to become a high-class programmer.
                        I will put all my strength and desire.
                        I love my family, programming and sports.
                        I have creative thinking and good analytical
                        skills, high efficiency, ability to establish
                        contacts and connections.</p>
                    <p className={s.about__skill}>best skill on</p>
                    <ul className={s.about__items}>
                        <li><img className={s.about__item} src={reactLogo} alt=""/></li>
                        <li><img className={s.about__item} src={reactLogo} alt=""/></li>
                        <li><img className={s.about__item} src={reactLogo} alt=""/></li>
                        <li><img className={s.about__item} src={reactLogo} alt=""/></li>
                        <li><img className={s.about__item} src={reactLogo} alt=""/></li>
                        <li><img className={s.about__item} src={reactLogo} alt=""/></li>


                    </ul>
                </div>
                <div className={s.avatar}>
                    <div className={s.avatar__block}>
                        <img src={avatar} alt="avatar"/>
                    </div>

                </div>
            </div>

            <Line/>
        </section>
    );
};

export default Intro;