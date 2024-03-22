import React, { FC } from 'react'
import s from './Title.module.scss'

type TitleType = {
  title: string
  subtitle: string
}
export const Title: FC<TitleType> = ({ title, subtitle }) => {
  return (
    <>
      <p className={s.subtitle}>{subtitle}</p>
      <h2 className={s.title}>{title}</h2>
    </>
  )
}
export const Subtitle: FC<TitleType> = ({ title, subtitle }) => {
  return (
    <>
      <p className={s.subtitleSubtitle}>{subtitle}</p>
      <h2 className={s.titleSubtitle}>{title}</h2>
    </>
  )
}
