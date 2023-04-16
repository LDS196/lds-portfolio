import React from 'react';
import s from './Intro.module.scss'
import react from '../assets/images/skills-logo/atom.png'
import avatar from '../assets/images/ava4.jpg'
import Line from "../Line/Line";
import redux from '../assets/images/skills-logo/redux.svg'
import css from '../assets/images/skills-logo/css-3.png'
import figma from '../assets/images/skills-logo/figma.png'
import git from '../assets/images/skills-logo/git.png'
import html5 from '../assets/images/skills-logo/html-5.png'
import js from '../assets/images/skills-logo/js.png'
import materialUI from '../assets/images/skills-logo/material-ui.svg'
import sass from '../assets/images/skills-logo/sass.png'
import storybook from '../assets/images/skills-logo/storybook.svg'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";


const mySkills = [react, js, redux, css, figma, git, html5, materialUI, sass, storybook,]
const Intro = () => {
    return (
        <section className={s.intro} id={'intro'}>
            <div className={s.intro__block}>
                <div className={s.about}>
                    <p className={s.about__subtitle}>welcome to my world</p>
                    <h1 className={s.about__title}>Hi, I'm <span className={s.about__name}>Dmitrii</span>
                        <br/>
                        <ReactTypingEffect text={'a Frontend Developer'}
                                           speed={150}
                                           typingDelay={500}
                                           eraseSpeed={45}
                                           eraseDelay={3000}
                        />
                    </h1>
                    <p className={s.about__desc}> I'm frontend developer with experience in creating SPA using React,
                        Redux, TypeScript.
                        Knowledge in user interface, testing, and debugging processes.
                        I improving my skills in this direction and plan to expand them with new technologies, such as
                        React Native.
                        I usually spend my free time reading IT-literature, doing sports and improving my English. Open
                        to your suggestions.</p>
                    <p className={s.about__skill}>best skill on</p>
                    <ul className={s.about__items}>
                        {mySkills.map((el, i) => <li key={i}><img className={s.about__item} src={el} alt=""/></li>)}


                    </ul>
                </div>

                <div className={s.avatar}>
                    <Fade
                        direction={'down'}
                        delay={200}
                        triggerOnce={true}
                    >
                        <div className={s.avatar__block}>
                            <img src={avatar} alt="avatar"/>
                        </div>
                    </Fade>
                </div>

            </div>
            <Line/>
        </section>
    );
};


export default Intro;