import { useState, useEffect } from 'react'

interface ProgressiveImageProps {
  lowResSrc: string
  highResSrc: string
  alt?: string
  className?: string
  aspectRatio?: string
}

const ProgressiveImage = ({ lowResSrc, highResSrc, alt, className, aspectRatio }: ProgressiveImageProps) => {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(lowResSrc)

  useEffect(() => {
    // Start loading the high-res image
    const highResImage = new Image()
    highResImage.onload = () => {
      setCurrentSrc(highResSrc)
      setIsHighResLoaded(true)
    }
    highResImage.src = highResSrc
  }, [highResSrc])

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${
        isHighResLoaded ? 'opacity-100' : 'opacity-90'
      }`}
      style={{ 
        aspectRatio: aspectRatio || 'auto'
      }}
    />
  )
}

export default ProgressiveImage