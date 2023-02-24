import React from 'react';
import s from './Form.module.scss'

const Form = () => {
    return (
        <div className={s.wrapper}>
            <form action={'#'} className={s.formBody}></form>
            <div className={s.formNameNumber}>
                <div className={s.formItem}>
                    <label htmlFor={'forName'} className={s.labelForm}>name</label>
                    <input type="text" className={s.formInput} id={'forName'} name={'name'}/>
                </div>
                <div className={s.formItem}>
                    <label htmlFor={'forNumber'} className={s.labelForm}>number</label>
                    <input type="number" className={s.formInput} id={'forNumber'} name={'number'}/>
                </div>
            </div>
            <div className={s.formItem}>
                <label htmlFor={'forEmail'} className={s.labelForm}>email</label>
                <input type="email" className={s.formInput} id={'forEmail'} name={'email'}/>
            </div>
            <div className={s.formItem}>
                <label htmlFor={'forSubject'} className={s.labelForm}>subject</label>
                <input type="text" className={s.formInput} id={'forSubject'} name={'subject'}/>
            </div>
            <div className={s.formItem}>
                <label htmlFor={'forMessage'} className={s.labelForm}>your message</label>
                <textarea className={s.formInput} id={'forMessage'} rows={10} cols={40} name={'message'}/>
            </div>
            <button type={"submit"} className={s.formButton}>send</button>

        </div>
    );
};

export default Form;