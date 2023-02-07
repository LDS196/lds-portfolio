import React from 'react';
import s from "./CardProject.module.scss";
import imgProject from "../assets/images/portfolio/project.jpg";
import Like from "./Like";
import {Link} from "react-router-dom";
import {cardProjectType} from "./Portfolio";


const CardProject = (props:cardProjectType) => {
    const {kind,title, technologies, id}=props

    return (
        <div className={s.item}>
            <li>
                <img src={imgProject} alt="todo"/>
                <div className={s.kind}>
                    <p>{kind}</p>
                        <Like id={id}/>
                </div>
                <Link className={s.link}  to={'/'}><h4>{title}</h4></Link>
                <div className={s.technologies}>
                    {technologies.map((el,i)=> <span key={i}>{el}<span className={s.slash}>/</span></span>)}
                </div>

                <Link className={s.link}  to={'/'}><span >show</span></Link>
            </li>
        </div>
    );
};

export default CardProject;