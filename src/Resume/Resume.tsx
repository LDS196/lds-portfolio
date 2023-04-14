import React, {useState} from 'react';
import s from './Resume.module.scss'
import {Title} from "../Title/Title";
import NavResume from "./NavResume";
import Education from "./Education";
import Me from "./Me";
import Skills from "./Skills";
import {Experience} from "./Experience";
import Line from "../Line/Line";
import {Fade} from "react-awesome-reveal";


const Resume = () => {
const [value,setValue]=useState(0)
    const onClick  =(value:number)=>{
    setValue(value)
    }
    return (
        <section className={s.resume} id={'resume'}>
            <Fade direction={'up'}
                  delay={500}
                  triggerOnce={true}>
            <div className={s.title}>
                <Title title={'My Resume'} subtitle={'10+ years experience'}
                />
            </div>
            <NavResume onClick={onClick}/>
            {value===0? <Skills/>:''}
            {value===1?  <Education/>:''}
            {value===2? <Experience/>:''}
            {value===3?  <Me/>:''}
            <Line/>




            </Fade>
        </section>
    );
};

export default Resume;

