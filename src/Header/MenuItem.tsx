import React from 'react'
import s from './Header.module.scss'
import { motion } from 'framer-motion'

type Props = {
  item: { to: string; title: string }
  isSelected: boolean
}
const MenuItem = ({ item, isSelected }: Props) => {
  return (
    <a href={`#${item.to}`}>
      {item.title}
      {isSelected && <ActiveLine />}
    </a>
  )
}

export default MenuItem

const ActiveLine = () => {
  return <motion.div className={s.hoverLine} layoutId={'activeItem'} />
}
