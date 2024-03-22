import React, { FC, useState } from 'react'
import s from './NavResume.module.scss'

type NavResumeType = {
  onClick: (value: number) => void
}
const NavResume: FC<NavResumeType> = ({ onClick }) => {
  const items = ['Professional Skills', 'Education', 'Experience', 'More about me']
  const [value, setValue] = useState(0)
  const onClickHandler = (i: number) => {
    onClick(i)
    setValue(i)
  }

  return (
    <div className={s.items}>
      {items.map((el, i) => {
        const finalClass = value !== i ? s.item : s.item + ' ' + s.active
        return (
          <button key={i} className={finalClass} onClick={() => onClickHandler(i)}>
            {el}
          </button>
        )
      })}
    </div>
  )
}

export default NavResume
