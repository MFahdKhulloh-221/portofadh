'use client'

import { useState, useEffect } from "react"

interface RotatingTextProps {
  texts: string[]
  mainClassName?: string
  rotationInterval?: number
}

export default function RotatingText({
  texts,
  mainClassName = "",
  rotationInterval = 3000,
}: RotatingTextProps) {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts, rotationInterval])

  return (
    <span className={mainClassName}>
      {texts[index]}
    </span>
  )
}