import { useEffect, useState } from 'react'
import './ScrollButton.css'

function ScrollButton() {
  const [showButton, setShowButton] = useState(false)
  const [isNearBottom, setIsNearBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const pageHeight = document.documentElement.scrollHeight

      setShowButton(scrollTop > 250)
      setIsNearBottom(scrollTop + windowHeight >= pageHeight - 500)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleClick = () => {
    if (isNearBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <button
      type="button"
      className={`scroll-button ${showButton ? 'scroll-button--visible' : ''}`}
      onClick={handleClick}
      aria-label={isNearBottom ? 'Прокрутити вгору' : 'Прокрутити вниз'}
    >
      <span className="scroll-button__glow"></span>

      {isNearBottom ? (
        <svg
          className="scroll-button__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 5L5 12H9V19H15V12H19L12 5Z" />
        </svg>
      ) : (
        <svg
          className="scroll-button__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 19L19 12H15V5H9V12H5L12 19Z" />
        </svg>
      )}
    </button>
  )
}

export default ScrollButton