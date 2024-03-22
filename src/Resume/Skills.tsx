import React from 'react'
import s from './Resume.module.scss'

import SkillsConteiner from './SkillsContainer'
import { Subtitle } from '../Title/Title'

const myDevSkills: SkillsType = [
  { title: 'html', progress: 70 },
  { title: 'css', progress: 70 },
  { title: 'javascript', progress: 75 },
  { title: 'react', progress: 80 },
  { title: 'typescript', progress: 70 },
  { title: 'redux', progress: 90 },
]
const myDesignSkills: SkillsType = [
  { title: 'figma', progress: 60 },
  { title: 'Adobe Photoshop', progress: 50 },
  { title: 'design', progress: 40 },
]

export type SkillsType = Array<{ title: string; progress: number }>

const Skills = () => {
  return (
    <div className={s.resumeSkills}>
      <div className={s.resumeDev}>
        <div className={s.titleSkills}>
          <Subtitle title={'Development Skills'} subtitle={'features'} />
        </div>
        <div className={s.skillsContainer}>
          <SkillsConteiner skills={myDevSkills} />
        </div>
      </div>
      <div className={s.resumeDesign}>
        <div className={s.titleSkills}>
          <Subtitle title={'Design Skills'} subtitle={'features'} />
        </div>
        <div className={s.skillsContainer}>
          <SkillsConteiner skills={myDesignSkills} />
        </div>
      </div>
    </div>
  )
}

export default Skills
