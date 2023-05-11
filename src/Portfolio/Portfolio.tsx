import React from 'react';
import s from './/Portfolio.module.scss'

import CardProject from "./CardProject";
import Line from "../Line/Line";
import {Title} from "Title/Title";
import { Fade } from "react-awesome-reveal";
import {projects} from "./projectsData";

export type technologiesType = String[]
export type cardProjectType = {
    kind: string
    title: string
    technologies: technologiesType
    id: string,
    urlImg:string,
    link:string

}

const Portfolio = () => {
    const projectsForRender = projects.map(el => <CardProject key={el.id} card={el}/>)
    return (
        <div className={s.portfolio} id={'projects'} >
            <Fade direction={'up'}
                  delay={200}
                  triggerOnce={true}
            >
                <div  className={s.portfolio__title}>
                    <Title subtitle={'Visit my portfolio and keep your feedback'} title={'My Portfolio'}/>
                </div>
                <ul>
                    {projectsForRender}
                </ul>
            </Fade>
                <Line/>

        </div>
    );
};

export default Portfolio;