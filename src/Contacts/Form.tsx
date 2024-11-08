import React from 'react'
import s from './Form.module.scss'
import emailjs from 'emailjs-com'

const Form = () => {
  function sendEmail(e: any) {
    e.preventDefault()
    emailjs.sendForm('service_lcslzyt', 'template_4eu4nyq', e.target, 'ie-LtrPZDzeWDkbxG').then(
      (result) => {
        if (result.text === 'OK') {
          alert('Your message was sent successfully!)')
          e.target.reset()
        }
      },
      (error) => {
        alert('your message was not received.Try again!')
        console.log(error.text)
      },
    )
  }
  return (
    <div className={s.wrapper}>
      <form className={s.formBody} onSubmit={sendEmail}>
        <div className={s.formNameNumber}>
          <div className={s.formItem}>
            <label htmlFor={'forName'} className={s.labelForm}>
              name
            </label>
            <input type='text' className={s.formInput} id={'forName'} name={'name'} />
          </div>
          <div className={s.formItem}>
            <label htmlFor={'forNumber'} className={s.labelForm}>
              number
            </label>
            <input type='number' className={s.formInput} id={'forNumber'} name={'number'} />
          </div>
        </div>
        <div className={s.formItem}>
          <label htmlFor={'forEmail'} className={s.labelForm}>
            email
          </label>
          <input type='email' className={s.formInput} id={'forEmail'} name={'email'} />
        </div>
        <div className={s.formItem}>
          <label htmlFor={'forSubject'} className={s.labelForm}>
            subject
          </label>
          <input type='text' className={s.formInput} id={'forSubject'} name={'subject'} />
        </div>
        <div className={s.formItem}>
          <label htmlFor={'forMessage'} className={s.labelForm}>
            your message
          </label>
          <textarea
            className={s.formInput}
            id={'forMessage'}
            rows={10}
            cols={40}
            name={'message'}
          />
        </div>
        <input type='submit' value='Send' className={s.formButton} />
      </form>
    </div>
  )
}

export default Form
