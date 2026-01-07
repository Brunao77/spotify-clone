'use client'

import { useEffect, useState } from "react";
import { Slider } from "@/components/Slider"
import styles from "./SliderSoundControl.module.scss"

export const SliderSoundControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime)
  }

  const formatTime = time => {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const duration = audio?.current?.duration ?? 0

  return (
    <div className={styles.sliderSoundControl}>
        <span>{formatTime(currentTime)}</span>

        <Slider
            className={styles.slider}
            value={[currentTime]}
            max={audio?.current?.duration ?? 0}
            min={0}
            onValueChange={(value) => {
            const [newCurrentTime] = value
            audio.current.currentTime = newCurrentTime
            }}
        />

        <span>{duration ? formatTime(duration) : '0:00'}</span>
    </div>
  )
}