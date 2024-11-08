import React, { FC, useEffect, useState } from 'react'
import like from '../assets/images/portfolio/like.png'
import likeDone from '../assets/images/portfolio/like-done.png'
import s from './Like.module.scss'

type LikeType = {
  id: string
}
const Like: FC<LikeType> = ({ id }) => {
  const [firstRendering, setFirstRendering] = useState(true)

  let [count, setCount] = useState(() => Math.floor(Math.random() * 50))
  let [isLike, setLike] = useState(false)

  useEffect(() => {
    if (!firstRendering) {
      localStorage.setItem(`count-${id}`, JSON.stringify(count))
      localStorage.setItem(`like-${id}`, JSON.stringify(isLike))
    }
    setFirstRendering(false)
  }, [count, isLike,firstRendering,id])

  useEffect(() => {
    const count = localStorage.getItem(`count-${id}`)
    const isLike = localStorage.getItem(`like-${id}`)
    if (count && isLike) {
      let newCount = JSON.parse(count)
      let newIsLike = JSON.parse(isLike)
      setCount(newCount)
      setLike(newIsLike)
    }
  }, [id])

  const onClickHandler = () => {
    if (!isLike) {
      setLike(true)
      count = count + 1
      setCount(count)
    } else {
      setLike(false)
      count = count - 1
      setCount(count)
    }
  }
  return (
    <div className={s.like}>
      <img onClick={onClickHandler} src={isLike ? likeDone : like} alt='like' />
      <span>{count}</span>
    </div>
  )
}

export default Like
