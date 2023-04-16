import React from 'react';
import s from './/Portfolio.module.scss'

import CardProject from "./CardProject";
import Line from "../Line/Line";
import {Title} from "Title/Title";
import { Fade } from "react-awesome-reveal";
import imgProject from "../assets/images/portfolio/project.jpg";
import socialNetwork from "../assets/images/portfolio/social-network.jpg";
import birds from "../assets/images/portfolio/birds.png";
import pizza from "../assets/images/portfolio/pizza.jpg";
import zoo from "../assets/images/portfolio/zoo.jpg";
import pazzleGame from "../assets/images/portfolio/pazzle.jpg";

export type technologiesType = String[]
export type cardProjectType = {
    kind: string
    title: string
    technologies: technologiesType
    id: string,
    urlImg:string,
    link:string

}
const projects: Array<cardProjectType> = [
    {
        kind: 'app',
        title: 'task manager',
        technologies: ['React','TypeScript', 'Redux', 'RestApi', 'Storybook','Redux-thunk', 'Router- dom', 'Axios', 'Mui', 'Formik',' Redux-Form', 'Jest'],
        id: '1',
        urlImg: imgProject,
        link:'https://lds196.github.io/1-todolist/'
    },
    {
        kind: 'web site',
        title: 'social network',
        technologies: ['React','TypeScript', 'Redux', 'RestApi', 'Router- dom', 'Axios', 'Ant design', 'Formik', 'Redux-Form', 'Jest'],
        id: '2',
        urlImg: socialNetwork,
        link:'https://lds196.github.io/samurai-way/'
    },
    {
        kind: 'online store',
        title: 'Mama Pizza',
        technologies: ['React','TypeScript', 'Redux Toolkit', 'RestApi', 'Router-dom', 'Axios','Hooks'],
        id: '3',
        urlImg: pizza,
        link:'https://lds196.github.io/new-pizza/'
    },
    {
        kind: 'game',
        title: 'songbirds',
        technologies: ['js','html', 'css', 'sass', 'figma'],
        id: '4',
        urlImg: birds,
        link:'https://rolling-scopes-school.github.io/lds196-JSFE2022Q3/songbirds/'
    },
    {
        kind: 'web site',
        title: 'online zoo',
        technologies:['js','html', 'css', 'sass', 'figma'],
        id: '5',
        urlImg: zoo,
        link:'https://rolling-scopes-school.github.io/lds196-JSFE2022Q3/online-zoo/pages/main/index.html'
    },
    {
        kind: 'game',
        title: 'Gem pazzle',
        technologies: ['js','html', 'css', 'sass', 'figma'],
        id: '6',
        urlImg: pazzleGame,
        link:'https://rolling-scopes-school.github.io/lds196-JSFE2022Q3/codejam/'
    },
]
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