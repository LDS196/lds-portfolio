import React from 'react'
import s from './PrivateContact.module.scss'
import { Link } from 'react-router-dom'
import contactHand from '../assets/images/contact-hand.png'
import telegram from '../assets/images/social-media/telegram.png'
import instagram from '../assets/images/social-media/instagram.png'
import git from '../assets/images/social-media/github.png'
import linkedin from '../assets/images/social-media/linkedin.png'

const PrivateContact = () => {
  return (
    <ul className={s.list}>
      <li className={s.listImg}>
        <img src={contactHand} alt='contact' />
      </li>
      <ul className={s.info}>
        <li className={s.title}>Likhachev Dmitrii</li>
        <li className={s.subtitle}>Fronted Developer</li>
        <li className={s.desc}>
          I am available for remote work. Connect with me via and call in to my account.
        </li>
        <li className={s.phone}>
          Phone: <span className={s.spanHover}>+7(982) 737-96-13</span>
        </li>
        <li className={s.email}>
          Email: <span className={s.spanHover}>lihachevd87@gmail.com</span>
        </li>
        <li>FIND WITH ME</li>
        <ul className={s.social}>
          <Link
            target={'_blank'}
            className={s.social__item}
            to={'https://www.linkedin.com/in/dmitrii-likhachev-357197236'}
          >
            <img title={'Linkedin'} src={linkedin} alt='' />
          </Link>
          <Link target={'_blank'} className={s.social__item} to={'https://github.com/LDS196'}>
            <img title={'Github'} src={git} alt='' />
          </Link>
          <Link target={'_blank'} className={s.social__item} to={'tg://resolve?domain=<@lds169>'}>
            <img title={'Telegram'} src={telegram} alt='' />
          </Link>
          <Link target={'_blank'} className={s.social__item} to={'https://www.instagram.com'}>
            <img title={'Instagram'} src={instagram} alt='' />
          </Link>
        </ul>
      </ul>
    </ul>
  )
}

export default PrivateContact
