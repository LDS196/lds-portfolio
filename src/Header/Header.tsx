import React, { useState } from 'react'
import s from './Header.module.scss'
import logo from '../assets/images/lab.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'

const menuData = [
  { title: 'home', to: 'intro' },
  { title: 'my projects', to: 'projects' },
  { title: 'resume', to: 'resume' },
  { title: 'contacts', to: 'contacts' },
]

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className={s.header}>
      <Link to={'/'}>
        <div className={s.headerLogo}>
          <motion.img
            src={logo}
            alt='logo'
            className={s.logoImg}
            animate={{
              rotate: 180,
            }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          />
          <p className={s.logoText}>LDS LAB</p>
        </div>
      </Link>

      <nav className={s.nav}>
        <motion.ul className={s.items} layout>
          {menuData.map((item, index) => {
            return (
              <motion.li
                key={item.title}
                className={s.item}
                onClick={() => {
                  setActiveIndex(index)
                }}
              >
                <MenuItem item={item} isSelected={index === activeIndex} />
              </motion.li>
            )
          })}
        </motion.ul>
      </nav>
    </div>
  )
}

export default Header
