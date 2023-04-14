import React from 'react';
import s from './Header.module.scss'
import logo from '../assets/images/lab.png'

import * as Scroll from 'react-scroll';
import { Link,  animateScroll as scroll, } from 'react-scroll'



const Header = () => {
    return (
        <div className={s.header} >
            <Link to={'/'}>
                <div className={s.headerLogo}>
                    <img src={logo} alt="logo" className={s.logoImg}/>
                    <p className={s.logoText}>LDS LAB</p>
                </div>
            </Link>

            <nav className={s.nav}>
                <ul className={s.items}>
                    <Link className={s.link} to={'intro'}>
                        <li className={s.item}>home</li>
                    </Link>
                    <Link className={s.link} to={'projects'}>
                        <li className={s.item}>my projects</li>
                    </Link>
                    <Link className={s.link} to={'resume'}>
                        <li className={s.item}>resume</li>
                    </Link>
                    <Link className={s.link} to={'contacts'}>
                        <li className={s.item}>contacts</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;