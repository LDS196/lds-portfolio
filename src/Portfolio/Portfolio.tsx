import React from 'react';
import s from './/Portfolio.module.scss'

import CardProject from "./CardProject";
import Line from "../Line/Line";
import {Title} from "Title/Title";
import { Fade } from "react-awesome-reveal";

export type technologiesType = String[]
export type cardProjectType = {
    kind: string
    title: string
    technologies: technologiesType
    id: string
}
const projects: Array<cardProjectType> = [
    {
        kind: 'online store',
        title: 'new pizza',
        technologies: ['react', 'css', 'sass', 'redux', 'html', 'figma'],
        id: '1'
    },
    {kind: 'game', title: 'song bird', technologies: ['react', 'css', 'sass', 'redux', 'html', 'figma'], id: '2'},
    {kind: 'website', title: 'todolist', technologies: ['react', 'css', 'sass', 'redux', 'html', 'figma'], id: '3'},
    {
        kind: 'social media',
        title: 'Hi Brother',
        technologies: ['react', 'css', 'sass', 'redux', 'html', 'figma'],
        id: '4'
    },
    {
        kind: 'online store',
        title: 'new pizza',
        technologies: ['react', 'css', 'sass', 'redux', 'html', 'figma'],
        id: '5'
    },
    {
        kind: 'online store',
        title: 'new pizza',
        technologies: ['react', 'css', 'sass', 'redux', 'html', 'figma'],
        id: '6'
    },
]
const Portfolio = () => {
    const projectsForRender = projects.map(el => <CardProject key={el.id} kind={el.kind}
                                                              title={el.title} technologies={el.technologies}
                                                              id={el.id}/>)
    return (
        <div className={s.portfolio} id={'projects'} >
            <Fade direction={'up'}
                  delay={500}
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