import React, { FC } from 'react'
import { Subtitle } from '../Title/Title'
import s from './Education.module.scss'

const myEducation = [
  {
    place: 'Urals State University of Railway Transport, faculty of railway construction',
    year: '2005-2010',
    speciality: 'Speciality – Engineer Railway Transport',
  },
  {
    place: 'Urals State University of Railway Transport, faculty of Economics and Finance',
    year: '2007-2010',
    speciality: 'Speciality – Commerce specialist',
  },
]
const Education = () => {
  return (
    <div className={s.education}>
      <div className={s.university}>
        <Subtitle title={'University Degree'} subtitle={''} />
        {myEducation.map((el, i) => (
          <EducationExample key={i} education={el} />
        ))}
      </div>
    </div>
  )
}

export default Education

type myEducationItemType = {
  place: string
  year: string
  speciality: string
}
type EducationExampleType = {
  education: myEducationItemType
}

const EducationExample: FC<EducationExampleType> = (props) => {
  const { place, year, speciality } = props.education
  return (
    <ul className={s.list}>
      <li className={s.place}>{place}</li>
      <li className={s.year}>{year}</li>
      <li className={s.speciality}>{speciality}</li>
    </ul>
  )
}
