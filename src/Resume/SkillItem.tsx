import React, { FC, forwardRef } from 'react'
import s from './SkillItem.module.scss'
import { motion } from 'framer-motion'

type SkillItemType = {
  progress: number
  title: string
}

const SkillItem: FC<SkillItemType> = forwardRef<HTMLLIElement, SkillItemType>(
  ({ progress, title }, ref) => {
    const gap = 30
    const paddingLeft = progress - gap
    return (
      <li className={s.item} ref={ref}>
        <span style={{ width: `${gap}%` }}>{title}</span>
        <span style={{ paddingLeft: `${paddingLeft}%` }}>{`${progress}%`}</span>
        <div className={s.progress}>
          <div className={s.progressInner} style={{ width: `${progress}%` }}></div>
        </div>
      </li>
    )
  },
)

const MSkillItem = motion(SkillItem)

export default MSkillItem
