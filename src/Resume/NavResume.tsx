import React from 'react';
import s from './NavResume.module.scss'

const NavResume = () => {
    const onClickHandler = () => {

    }
    return (
        <ul className={s.items}>
            <li className={s.item} onClick={onClickHandler}>Professional Skills</li>
            <li className={s.item} onClick={onClickHandler}>Education</li>
            <li className={s.item} onClick={onClickHandler}>Experience</li>
            <li className={s.item} onClick={onClickHandler}>More about me</li>
        </ul>
    );
};

export default NavResume;