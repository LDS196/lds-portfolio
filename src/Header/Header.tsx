import React from 'react';
import s from './Header.module.scss'
import logo from '../assets/images/lab.png'
import {Link} from "react-scroll";
import {motion} from 'framer-motion';


const Header = () => {
  return (
    <div className={s.header}>
      <Link to={'/'}>
        <div className={s.headerLogo}>
          <motion.img src={logo} alt="logo" className={s.logoImg} animate={{
            rotate: 180
          }}
                      transition={{duration: 1, repeat: Infinity, repeatDelay: 2}}/>
          <p className={s.logoText}>LDS LAB
          </p>
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
  )
    ;
};


export default Header;