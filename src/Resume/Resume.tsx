import React, {useState} from 'react';
import s from './Resume.module.scss'
import {Title} from "Title/Title";
import NavResume from "./NavResume";
import Education from "./Education";
import Me from "./Me";
import Skills from "./Skills";
import {Experience} from "./Experience";
import Line from "../Line/Line";
import {Fade} from "react-awesome-reveal";
// @ts-ignore
import pdf from '../assets/files/hw.pdf'

// // const cv = 'https://lds196.github.io/lds-portfolio/public/cv.jpg'
//  const cv = 'http://localhost:3000/lds-portfolio/public/cv.jpg'
const Resume = () => {
    const [value, setValue] = useState(0)
    const onClick = (value: number) => {
        setValue(value)
    }


    const onButtonClick = () => {
        fetch(pdf, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `FileName.pdf`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                // @ts-ignore
                link?.parentNode.removeChild(link);
            });
    }
    return (
        <section className={s.resume} id={'resume'}>
            <Fade direction={'up'}
                  delay={500}
                  triggerOnce={true}>
                <div className={s.title}>
                    <Title title={'My Resume'} subtitle={'10+ years experience'}/>
                </div>
                {/*<button onClick={() => downloadFile()}>Download CV</button>*/}
                <button onClick={onButtonClick}>Download file</button>
                <NavResume onClick={onClick}/>
                {value === 0 ? <Skills/> : ''}
                {value === 1 ? <Education/> : ''}
                {value === 2 ? <Experience/> : ''}
                {value === 3 ? <Me/> : ''}
                <Line/>


            </Fade>


        </section>
    );
};



export default Resume;

