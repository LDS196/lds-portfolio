import React, { FC } from 'react'
import { SkillsType } from './Skills'
import { motion } from 'framer-motion'
import MSkillItem from './SkillItem'

type SkillsContainerType = {
  skills: SkillsType
}
const skillsAnimation = {
  hidden: {
    // x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    // x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
}
const SkillsContainer: FC<SkillsContainerType> = ({ skills }) => {
  const skillsForRender = skills.map((el, i) => (
    <MSkillItem
      variants={skillsAnimation}
      custom={i + 1}
      key={i}
      progress={el.progress}
      title={el.title}
    />
  ))
  return (
    <motion.ul initial='hidden' whileInView='visible' viewport={{ amount: 0.2 }}>
      {skillsForRender}
    </motion.ul>
  )
}

export default SkillsContainer
