import React from 'react';
import s from './Resume.module.scss'
import Title from "../Title/Title";
import NavResume from "./NavResume";

import SkillsConteiner from "./SkillsContainer";
export type SkillsType=Array<{title: string, progress: number}>

const myDevSkills: SkillsType = [
    {title: 'html', progress: 80},
    {title: 'css', progress: 70},
    {title: 'javascript', progress: 65},
    {title: 'react', progress: 75},
    {title: 'typescript', progress: 60},
    {title: 'redux', progress: 65},
]
const myDesignSkills:SkillsType = [
    {title: 'figma', progress: 60},
    {title: 'Adobe Photoshop', progress: 50},
    {title: 'design', progress: 40},

]
const Resume = () => {

    return (
        <section className={s.resume}>
            <div className={s.title}>
                <Title title={'My Resume'} subtitle={'10+ years experience'}
                fontSizeTitle={'46px'} fontSizeSubtitle={'16px'}/>
            </div>
            <NavResume/>
            <div className={s.resumeSkills}>
                <div className={s.resumeDev}>
                    <div className={s.titleSkills}>
                        <Title title={'Development Skill'} subtitle={'features'}
                               fontSizeTitle={'32px'} fontSizeSubtitle={'10px'}/>
                    </div>
                    <div className={s.skillsContainer}>
                        <SkillsConteiner skills={myDevSkills}/>
                    </div>
                </div>
                <div className={s.resumeDesign}>
                    <div className={s.titleSkills}>
                        <Title title={'Design Skill'} subtitle={'features'}
                               fontSizeTitle={'32px'} fontSizeSubtitle={'10px'}/>
                    </div>
                    <div className={s.skillsContainer}>
                        <SkillsConteiner skills={myDesignSkills}/>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Resume;