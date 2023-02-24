import React from 'react';
import s from "./Resume.module.scss";
import Title from "../Title/Title";
import SkillsConteiner from "./SkillsContainer";

const myDevSkills: SkillsType = [
    {title: 'html', progress: 80},
    {title: 'css', progress: 70},
    {title: 'javascript', progress: 65},
    {title: 'react', progress: 75},
    {title: 'typescript', progress: 60},
    {title: 'redux', progress: 65},
];
const myDesignSkills:SkillsType = [
    {title: 'figma', progress: 60},
    {title: 'Adobe Photoshop', progress: 50},
    {title: 'design', progress: 40},

];

export type SkillsType=Array<{title: string, progress: number}>;

const Skills = () => {
    return (
        <div className={s.resumeSkills}>
            <div className={s.resumeDev}>
                <div className={s.titleSkills}>
                    <Title title={'Development Skills'} subtitle={'features'}
                           fontSizeTitle={'32px'} fontSizeSubtitle={'10px'}/>
                </div>
                <div className={s.skillsContainer}>
                    <SkillsConteiner skills={myDevSkills}/>
                </div>
            </div>
            <div className={s.resumeDesign}>
                <div className={s.titleSkills}>
                    <Title title={'Design Skills'} subtitle={'features'}
                           fontSizeTitle={'32px'} fontSizeSubtitle={'10px'}/>
                </div>
                <div className={s.skillsContainer}>
                    <SkillsConteiner skills={myDesignSkills}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;