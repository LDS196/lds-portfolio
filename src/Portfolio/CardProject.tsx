import React from 'react';
import s from "./CardProject.module.scss";
import Like from "./Like";
import {Link} from "react-router-dom";
import {cardProjectType} from "./Portfolio";

type PropsType= {
    card:cardProjectType
}
const CardProject = (props:PropsType) => {
    const {kind,title, technologies, id,urlImg,link}= {...props.card}

    return (
        <div className={s.item}>
            <li>
                <Link target={"_blank"} to={link}><img
                  src={urlImg} alt="todo"/></Link>
                <div className={s.kind}>
                    <p>{kind}</p>
                        <Like id={id}/>
                </div>
                <Link target={"_blank"} className={s.link}  to={link}><h4>{title}</h4></Link>
                <div className={s.technologies}>
                    {technologies.map((el,i)=> <span key={i}>{el}<span className={s.slash}>/</span></span>)}
                </div>

                <Link target={"_blank"} className={s.link}  to={link}><span >show</span></Link>
            </li>
        </div>
    );
};

export default CardProject;