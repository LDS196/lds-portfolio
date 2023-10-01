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
import ReactTypingEffect from "react-typing-effect";


const mySkills = [react, js, redux, css, figma, git, html5, materialUI, sass, storybook,]
const Intro = () => {
    return (
        <section className={s.intro} id={'intro'}>
            <div className={s.intro__block}>
                <div className={s.about}>
                    <p className={s.about__subtitle}>welcome to my world</p>
                    <h1 className={s.about__title}>Hi, I'm <span className={s.about__name}>Dmitrii </span>
                        <br/>
                      a Frontend Developer
                        {/*<ReactTypingEffect*/}
                        {/*  className={s.typing}*/}
                        {/*  text={'a Frontend Developer'}*/}

                        {/*                   speed={150}*/}
                        {/*                   typingDelay={500}*/}
                        {/*                   eraseSpeed={45}*/}
                        {/*                   eraseDelay={3000}*/}
                        {/*/>*/}
                    </h1>
                    <p className={s.about__desc}>Frontend developer with two years of development experience. I write in Javascript/TypeScript using React, Next.js, Vue. I love developing SPA/SSR web applications with user-friendly UI and beautiful design.<br/>I am passionate about information technology and how it is transforming business.
                        <br/>I will be glad to work in a group with current technology stacks and high-level expertise.</p>
                    <p className={s.about__skill}>best skill on</p>
                    <ul className={s.about__items}>
                        {mySkills.map((el, i) => <li key={i}><img className={s.about__item} src={el} alt=""/></li>)}
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