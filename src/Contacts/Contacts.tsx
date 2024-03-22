import React, { useRef } from 'react'
import PrivateContact from './PrivateContact'
import Form from './Form'
import { Title } from '../Title/Title'
import s from './Form.module.scss'
import Line from '../Line/Line'
import { Fade } from 'react-awesome-reveal'
import emailjs from 'emailjs-com'

const Contacts = () => {
  return (
    <div className={s.contact} id={'contacts'}>
      <Fade direction={'up'} delay={200} triggerOnce={true}>
        <div className={s.contactTitle}>
          <Title title={'Contact With Me'} subtitle={'contact'} />
        </div>
        <div className={s.contactList}>
          <PrivateContact />
          <Form />
        </div>
        <Line />
      </Fade>
    </div>
  )
}

export default Contacts
