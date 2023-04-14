import React from 'react';
import PrivateContact from "./PrivateContact";
import Form from "./Form";
import {Title} from "../Title/Title";
import s from './Form.module.scss'
import Line from "../Line/Line";
const Contacts = () => {
    return (
        <div className={s.contact} id={'contacts'}>
            <div className={s.contactTitle}>
                <Title title={'Contact With Me'} subtitle={'contact'} />
            </div>
            <div className={s.contactList} >
                <PrivateContact/>
                <Form/>
            </div>
            <Line/>
    </div>

    );
};

export default Contacts;